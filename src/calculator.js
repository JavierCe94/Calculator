import React, { Component } from 'react';
import './calculator.css';
import Description from './components/description';
import Display from './components/calculator/display';
import Buttons from './components/calculator/buttons';

const OPERATIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide'
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualValueDisplay: '0'
    };
  }

  changeActualValueDisplay = newValue => {
    this.setState({actualValueDisplay: newValue});
  }

  calculateOperation = (operation, operator1, operator2) => {
    switch (operation) {
      case OPERATIONS.ADD:
        return parseFloat(operator1) + parseFloat(operator2);
      case OPERATIONS.SUBTRACT:
        return parseFloat(operator1) - parseFloat(operator2);
      case OPERATIONS.MULTIPLY:
        return parseFloat(operator1) * parseFloat(operator2);
      case OPERATIONS.DIVIDE:
        return parseFloat(operator1) / parseFloat(operator2);
    }
  }

  render() {
    return (
      <div className="container">
        <Description />
        <div className="calculator">
          <Display actualValueDisplay={this.state.actualValueDisplay}/>
          <Buttons actualValueDisplay={this.state.actualValueDisplay} changeActualValueDisplay={this.changeActualValueDisplay}
            calculateOperation={this.calculateOperation} />
        </div>
      </div>
    );
  }
}

export default Calculator;
