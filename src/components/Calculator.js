import React, { Component } from "react";
import KeyBoard from "./KeyBoard";
import Results from "./Results";

class Calculator extends Component {
  state = {
    answer: 0,
    userInput: "",
    errorMessage: "",
  };

  handleUserInput = (value) => {
    this.setState({ errorMessage: "" });
    const signs = ["+", "-", "x", "÷"];
    let { userInput } = this.state;
    if (value !== "C" && value !== "←" && value !== "=") {
      if (
        signs.includes(
          userInput.substring(userInput.length - 1, userInput.length)
        ) &&
        signs.includes(value)
      ) {
        this.setState({
          userInput: userInput.slice(0, userInput.length - 1) + value,
        });
      } else if (signs.includes(value) && userInput.length === 0) {
        this.setState({ errorMessage: "Cannot start with a sign" });
      } else {
        this.setState({ userInput: userInput + value });
      }
    } else if (value === "C") {
      this.setState({ answer: 0, userInput: "" });
    } else if (value === "←") {
      this.setState({
        userInput: userInput.slice(0, userInput.length - 1),
      });
    } else if (value === "=") {
      console.log(userInput);
    }
  };

  render() {
    let { errorMessage } = this.state;
    return (
      <div>
        <div className="calculator">
          <Results
            answer={this.state.answer}
            userInput={this.state.userInput}
          />
          <KeyBoard onButtonClick={this.handleUserInput} />
        </div>
        <div className="error-message">{errorMessage}</div>
      </div>
    );
  }
}

export default Calculator;
