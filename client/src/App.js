import React, { Component } from 'react';
import './App.css';
import Thermostat from 'react-nest-thermostat'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import {grpc} from "grpc-web-client"
import {TemperatureController} from "./generated/service_pb_service"
import proto from "./generated/service_pb"

const host = "http://localhost:8080"

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {target: 70, current: 60}
      const getRequest = new proto.GetTemperatureRequest()
      grpc.invoke(TemperatureController.GetTemperature, {
          host, 
          request: getRequest,
          onMessage: (message) => {
              console.log(message.getTemperature())
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
      var props = {currentTemperature, targetTemperature}
      var props2 = {targetTemperature, updateTargetTemperature}
    return (
      <div className="App">
        <TemperatureDisplay {...props}/>
        <TemperatureSlider {...props2}/>
      </div>
    );
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
        var newProps =  {ambientTemperature: currentTemperature, targetTemperature, hvacMode}
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
                <Slider defaultValue={targetTemperature} onChange={updateTargetTemperature}/>
            </div>
        )
    }
}

export default App;
