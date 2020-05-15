import React, { Component } from "react";
import KeyBoard from "./KeyBoard";
import Results from "./Results";

class Calculator extends Component {
  state = {
    answer: 0,
    userInput: "",
    errorMessage: "",
  };

  calculateTotal() {
    const words = this.state.userInput.split(" ");
    let answer = parseInt(words[0]);
    words.forEach((word, i) => {
      if (i % 2 === 1) {
        switch (word) {
          case "+":
            answer += parseInt(words[i + 1]);
            break;
          case "-":
            answer -= parseInt(words[i + 1]);
            break;
          case "x":
            answer *= parseInt(words[i + 1]);
            break;
          case "÷":
            answer /= parseInt(words[i + 1]);
            break;
          default:
            break;
        }
      }
    });
    this.setState({ answer });
  }

  handleUserInput = (value) => {
    this.setState({ errorMessage: "" });
    const signs = ["+", "-", "x", "÷"];
    let { userInput } = this.state;
    switch (value) {
      case "C":
        this.setState({ answer: 0, userInput: "" });
        break;
      case "←":
        if (
          signs.includes(
            userInput.substring(userInput.length - 2, userInput.length - 1)
          )
        ) {
          this.setState({
            userInput: userInput.slice(0, userInput.length - 3),
          });
        } else {
          this.setState({
            userInput: userInput.slice(0, userInput.length - 1),
          });
        }
        break;
      case "=":
        if (
          signs.includes(
            userInput.substring(userInput.length - 2, userInput.length - 1)
          )
        ) {
          this.setState({ errorMessage: "Cannot end with a sign" });
        } else {
          this.calculateTotal();
        }
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        if (
          signs.includes(
            userInput.substring(userInput.length - 2, userInput.length - 1)
          ) &&
          signs.includes(value)
        ) {
          this.setState({
            userInput: userInput.slice(0, userInput.length - 2) + value + " ",
          });
        } else if (signs.includes(value) && userInput.length === 0) {
          this.setState({ errorMessage: "Cannot start with a sign" });
        } else {
          this.setState({ userInput: userInput + " " + value + " " });
        }
        break;
      default:
        this.setState({ userInput: userInput + value });
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
