import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 5, color: "blue" };
  }

  handleEvent = () => {
    this.setState({ counter: this.state.counter + 1, color: "red" });
  };

  handleEvent1 = () => {
    this.setState({ counter: this.state.counter - 1, color: "violet" });
  };

  handleEvent2 = () => {
    this.setState({ counter: this.state.counter + 2, color: "aqua" });
  };

  handleEvent3 = () => {
    this.setState({ counter: this.state.counter - 2, color: "pink" });
  };

  handleEvent4 = () => {
    this.setState({ counter: this.state.counter + 5, color: "orange" });
  };

  handleEvent5 = () => {
    this.setState({ counter: this.state.counter - 5, color: "black" });
  };

  render() {
    const buttonStyle = {
        width: "60px",
        height: "60px",
        padding: "10px",
        fontSize: "24px",
        backgroundColor: "orange",
        margin: "10px", 
      };
    return (
      <center>
        <div>
          <button style={buttonStyle} onClick={this.handleEvent}>+1</button>
          <button style={buttonStyle} onClick={this.handleEvent1}>-1</button>
          <button style={buttonStyle} onClick={this.handleEvent2}>+2</button>
          <h1 style={{ color: this.state.color,fontSize:"60px" }}>{this.state.counter}</h1>
          <button style={buttonStyle} onClick={this.handleEvent3}>-2</button>
          <button style={buttonStyle} onClick={this.handleEvent4}>+5</button>
          <button style={buttonStyle} onClick={this.handleEvent5}>-5</button>
        </div>
      </center>
    );
  }
}

export default Counter;
