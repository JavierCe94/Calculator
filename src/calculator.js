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
const ZERO_NUMBER = '0';
const DECIMAL = '.';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualValueDisplay: '0',
      lastValueDisplay: '0',
      clearDisplay: false,
      actualOperation: ''
    };
  }

  changeActualValueDisplay = newValue => {
    this.setState({actualValueDisplay: newValue});
  }
  changeLastValueDisplay = newValue => {
    this.setState({lastValueDisplay: newValue});
  }
  changeClearDisplay = newValue => {
    this.setState({clearDisplay: newValue});
  }
  changeActualOperation = newValue => {
    this.setState({actualOperation: newValue});
  }

  addNumber = e => {
    if (ZERO_NUMBER === this.state.actualValueDisplay || this.state.clearDisplay) {
      this.changeClearDisplay(false);
      this.changeActualValueDisplay(this.valueButtonNumber(e.target));
    } else {
      const concatenation = `${this.state.actualValueDisplay}${this.valueButtonNumber(e.target)}`;
      this.changeActualValueDisplay(concatenation);
    }
  }
  valueButtonNumber = button => {
    return button.value;
  }
  
  executeOperation = e => {
    if (ZERO_NUMBER !== this.state.lastValueDisplay) {
      const total = this.calculateOperation(
        e.target.dataset.action,
        this.state.lastValueDisplay,
        this.state.actualValueDisplay
      );
      this.changeActualValueDisplay(total);
      this.changeLastValueDisplay(total);
    } else {
      this.changeLastValueDisplay(this.state.actualValueDisplay);
    }
    this.changeClearDisplay(true);
    this.changeActualOperation(e.target.dataset.action);
  }
  calculate = e => {
    if ('' !== this.state.actualOperation) {
      const total = this.calculateOperation(
        this.state.actualOperation,
        this.state.lastValueDisplay,
        this.state.actualValueDisplay
      );
      this.changeActualValueDisplay(total);
      this.changeLastValueDisplay(ZERO_NUMBER);
      this.changeClearDisplay(true);
      this.changeActualOperation('');
    }
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

  clear = e => {
    this.changeActualValueDisplay(ZERO_NUMBER);
    this.changeLastValueDisplay(ZERO_NUMBER);
    this.changeClearDisplay(false);
    this.changeActualOperation('');
  }

  decimal = e => {
    const actualValue = `${this.state.actualValueDisplay}`;
    if (false === actualValue.includes('.') || this.state.clearDisplay) {
      const concatenation = this.state.clearDisplay ? '0.' : `${this.state.actualValueDisplay}.`;
      this.changeClearDisplay(false);
      this.changeActualValueDisplay(concatenation);
    }
  }

  render() {
    return (
      <div className="container">
        <Description />
        <div className="calculator">
          <Display actualValueDisplay={this.state.actualValueDisplay}/>
          <Buttons addNumber={this.addNumber} executeOperation={this.executeOperation} calculate={this.calculate}
            clear={this.clear} decimal={this.decimal}/>
        </div>
      </div>
    );
  }
}

export default Calculator;
