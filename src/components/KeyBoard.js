import React, { Component } from "react";

class KeyBoard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="key-row">
          <button
            className="big-button"
            onClick={() => this.props.onButtonClick("C")}
          >
            C
          </button>
          <button onClick={() => this.props.onButtonClick("←")}>←</button>
          <button onClick={() => this.props.onButtonClick("÷")}>÷</button>
        </div>

        <div className="key-row">
          <button onClick={() => this.props.onButtonClick(7)}>7</button>
          <button onClick={() => this.props.onButtonClick(8)}>8</button>
          <button onClick={() => this.props.onButtonClick(9)}>9</button>
          <button onClick={() => this.props.onButtonClick("x")}>x</button>
        </div>

        <div className="key-row">
          <button onClick={() => this.props.onButtonClick(4)}>4</button>
          <button onClick={() => this.props.onButtonClick(5)}>5</button>
          <button onClick={() => this.props.onButtonClick(6)}>6</button>
          <button onClick={() => this.props.onButtonClick("-")}>-</button>
        </div>

        <div className="key-row">
          <button onClick={() => this.props.onButtonClick(1)}>1</button>
          <button onClick={() => this.props.onButtonClick(2)}>2</button>
          <button onClick={() => this.props.onButtonClick(3)}>3</button>
          <button onClick={() => this.props.onButtonClick("+")}>+</button>
        </div>

        <div className="key-row">
          <button onClick={() => this.props.onButtonClick(0)}>0</button>
          <button onClick={() => this.props.onButtonClick(".")}>.</button>
          <button
            className="big-button special-button"
            onClick={() => this.props.onButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default KeyBoard;
