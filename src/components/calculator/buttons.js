import React, { Component } from 'react';
import Button from './button';

const OPERATIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide'
}
const ZERO_NUMBER = '0';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastValueDisplay: '0',
      clearDisplay: false,
      actualOperation: ''
    };
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
    if (ZERO_NUMBER === this.props.actualValueDisplay || this.state.clearDisplay) {
      this.changeClearDisplay(false);
      this.props.changeActualValueDisplay(this.valueButtonNumber(e.target));
    } else {
      const concatenation = `${this.props.actualValueDisplay}${this.valueButtonNumber(e.target)}`;
      this.props.changeActualValueDisplay(concatenation);
    }
  }
  valueButtonNumber = button => {
    return button.value;
  }
  
  executeOperation = e => {
    if (ZERO_NUMBER !== this.state.lastValueDisplay) {
      const total = this.props.calculateOperation(
        e.target.dataset.action,
        this.state.lastValueDisplay,
        this.props.actualValueDisplay
      );
      this.props.changeActualValueDisplay(total);
      this.changeLastValueDisplay(total);
    } else {
      this.changeLastValueDisplay(this.props.actualValueDisplay);
    }
    this.changeClearDisplay(true);
    this.changeActualOperation(e.target.dataset.action);
  }
  calculate = e => {
    if ('' !== this.state.actualOperation) {
      const total = this.props.calculateOperation(
        this.state.actualOperation,
        this.state.lastValueDisplay,
        this.props.actualValueDisplay
      );
      this.props.changeActualValueDisplay(total);
      this.changeLastValueDisplay(ZERO_NUMBER);
      this.changeClearDisplay(true);
      this.changeActualOperation('');
    }
  }

  clear = e => {
    this.props.changeActualValueDisplay(ZERO_NUMBER);
    this.changeLastValueDisplay(ZERO_NUMBER);
    this.changeClearDisplay(false);
    this.changeActualOperation('');
  }

  decimal = e => {
    const actualValue = `${this.props.actualValueDisplay}`;
    if (false === actualValue.includes('.') || this.state.clearDisplay) {
      const concatenation = this.state.clearDisplay ? '0.' : `${this.props.actualValueDisplay}.`;
      this.changeClearDisplay(false);
      this.props.changeActualValueDisplay(concatenation);
    }
  }

  showButtonsOperator() {
    const buttons = [
      {id: 1, action: OPERATIONS.ADD, value: '+'},
      {id: 2, action: OPERATIONS.SUBTRACT, value: '-'},
      {id: 3, action: OPERATIONS.MULTIPLY, value: '×'},
      {id: 4, action: OPERATIONS.DIVIDE, value: '÷'}
    ];

    return buttons.map(button => <Button key={button.id} class="key--operator" event={this.executeOperation}
      action={button.action} value={button.value} />);
  }
  
  showButtonsNumber() {
    const buttons = [
      {id: 5, value: 7},
      {id: 6, value: 8},
      {id: 7, value: 9},
      {id: 8, value: 4},
      {id: 9, value: 5},
      {id: 10, value: 6},
      {id: 11, value: 1},
      {id: 12, value: 2},
      {id: 13, value: 3},
      {id: 14, value: 0}
    ];

    return buttons.map(button => <Button key={button.id} event={this.addNumber} 
      value={button.value} />);
  }

  render() {
    return (
      <div className="calculator__keys">
        {this.showButtonsOperator()}
        {this.showButtonsNumber()}
        <Button action="decimal" value="." event={this.decimal}/>
        <Button action="clear" value="AC" event={this.clear}/>
        <Button class="key--equal" action="calculate" value="=" event={this.calculate}/>
      </div>
    );
  }
}

export default Buttons;
