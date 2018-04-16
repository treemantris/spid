import React, { Component } from 'react';
import './App.css';
import Thermostat from 'react-nest-thermostat'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import "react-toggle-switch/dist/css/switch.min.css"
import {grpc} from "grpc-web-client"
import {TemperatureController} from "./generated/service_pb_service"
import proto from "./generated/service_pb"
import Switch from 'react-toggle-switch'

const host = "http://localhost:8080"
const minScale = 85
const maxScale = 185

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {target: 150, current: 110, overrides: {heat:false, cool:false}}
      const getRequest = new proto.GetTemperatureRequest()
      grpc.invoke(TemperatureController.GetTemperature, {
          host, 
          request: getRequest,
          onMessage: (message) => {
              this.setState({...this.state, current: message.getTemperature()})
          },
          onEnd: (end) => {
              console.log(end)
          }
      })
  }

  render() {
      var targetTemperature = this.state.target
      var currentTemperature = this.state.current
      var updateTargetTemperature = (newValue) => {
          const temperatureSetRequest = new proto.TemperatureSetRequest()
          temperatureSetRequest.setDesiredtemperature(newValue)

          grpc.unary(TemperatureController.SetTemperature, {
              host,
              request: temperatureSetRequest,
              onEnd: res => {
                  const { status, statusMessage, headers, message, trailers } = res
                  if (status === grpc.Code.OK && message) {
                      console.log("all ok. got resp: ", message.toObject());
                  } else {
                      console.log("fail")
                  }
              }
          })
          this.setState({target:newValue})
      }

      var updateOverrides = (newValue) => {
          const setOverridesRequest = new proto.SetOverridesRequest()
          const desiredState = new proto.OverrideState()
          desiredState.setHeat(newValue.heat)
          desiredState.setCool(newValue.cool)
          setOverridesRequest.setOverridestate(desiredState)
          grpc.unary(TemperatureController.SetOverrides, {
              host,
              request: setOverridesRequest,
              onEnd: res => {
                  const { status, statusMessage, headers, message, trailers } = res
                  if (status === grpc.Code.OK && message) {
                      console.log("all ok. got resp: ", message.toObject());
                      const newState = {heat: message.getOverridestate().getHeat(), cool: message.getOverridestate().getCool()}
                      this.setState({...this.state, overrides: {...this.state.overrides, ...newState}})
                  } else {
                      console.log("fail")
                  }
              }
          })
      }

      var props = {currentTemperature, targetTemperature}
      var props2 = {targetTemperature, updateTargetTemperature}
      var props3 = {updateOverrides, overrides: this.state.overrides}
    return (
      <div className="App">
        <TemperatureDisplay {...props}/>
        <TemperatureSlider {...props2}/>
        <InfoPanel {...props} />
        <Overrides {...props3} />
      </div>
    );
  }
}

function toFarenheit(celcius) {
    return celcius * 1.8  + 32
}

class InfoPanel extends Component {
    render() {
        var {currentTemperature, targetTemperature} = this.props
        var currentFarenheit = toFarenheit(currentTemperature)
        var targetFarenheit = toFarenheit(targetTemperature)
        return ( 
            <div>
            <div>
            {"Current temperature: " + currentTemperature + "°C " + "(" + currentFarenheit + "°F) "}
            </div>
            <div>
            {"Target temperature: " + targetTemperature + "°C " + "(" + targetFarenheit + "°F) "}
            </div>
            </div>
        )
    }
}

class Overrides extends Component {
    render() {
        const {updateOverrides, overrides} = this.props
        return (
            <div>
            <div>
            {"Override heat "} 
            <Switch on={overrides.heat} onClick={()=>{updateOverrides({heat:!overrides.heat, cool:false})}}/>
            </div>
            <div>
            {"Override cool"}
            <Switch on={overrides.cool} onClick={()=>{updateOverrides({cool:!overrides.cool, heat:false})}}/>
            </div>
            </div>
        )
    }
}

class TemperatureDisplay extends Component {
    render() {
        var{currentTemperature, targetTemperature} = this.props
        var hvacMode
        if (targetTemperature > currentTemperature)
            hvacMode = "heating"
        else if (targetTemperature < currentTemperature) 
            hvacMode = "cooling"
        else
            hvacMode = "off"
        var newProps =  {minValue: minScale, maxValue: maxScale, ambientTemperature: currentTemperature, targetTemperature, hvacMode}
        return (
            <div>
                <Thermostat {...newProps}/>
            </div>
        )
    }
}

class TemperatureSlider extends Component {
    render() {
        var {targetTemperature, updateTargetTemperature} = this.props
        return (
            <div>
                <Slider min={minScale} max={maxScale} defaultValue={targetTemperature} onChange={updateTargetTemperature}/>
            </div>
        )
    }
}

export default App;
