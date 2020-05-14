import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="results">
        <h1 className="answer">{this.props.answer}</h1>
        <h3 className="input">{this.props.userInput}</h3>
      </div>
    );
  }
}

export default Results;
