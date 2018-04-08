import React, { Component } from 'react';
import './App.css';
import Thermostat from 'react-nest-thermostat'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {target: 70}
  }

  render() {
      var targetTemperature = this.state.target
      var currentTemperature = 60
      var updateTargetTemperature = (newValue) => this.setState({target:newValue})
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
