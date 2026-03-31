import React, { Component } from "react";

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { buttonText: "SWITCH ON", normalText: "TURNED OFF" };
  }

handleButton = () => {
    this.setState((prevState)=>({
        buttonText:prevState.buttonText==="SWITCH ON"?"SWITCH OFF":"SWITCH ON",
        normalText:prevState.normalText==="TURNED OFF"?"TURNED ON":"TURNED OFF"
    }));
};

  render() {
    return (
      <div>
        <button onClick={this.handleButton}>
          {this.state.buttonText}
        </button>
        <h1>{this.state.normalText}</h1>

      </div>
    );
  }
}

export default ToggleSwitch;
