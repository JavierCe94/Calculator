import React, { Component } from 'react';
import ButtonOperator from './button_operator';
import ButtonNumber from './button_number';

const OPERATIONS = {
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide'
}

class Buttons extends Component {
  showButtonsOperator() {
    const buttons = [
      {id: 1, action: OPERATIONS.ADD, value: '+'},
      {id: 2, action: OPERATIONS.SUBTRACT, value: '-'},
      {id: 3, action: OPERATIONS.MULTIPLY, value: '×'},
      {id: 4, action: OPERATIONS.DIVIDE, value: '÷'}
    ];

    return buttons.map(button => <ButtonOperator key={button.id} executeOperation={this.props.executeOperation}
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

    return buttons.map(button => <ButtonNumber key={button.id} 
      addNumber={this.props.addNumber} value={button.value} />);
  }

  render() {
    return (
      <div className="calculator__keys">
        {this.showButtonsOperator()}
        {this.showButtonsNumber()}
        <button data-action="decimal" value="." onClick={this.props.decimal}>.</button>
        <button data-action="clear" value="AC" onClick={this.props.clear}>AC</button>
        <button className="key--equal" data-action="calculate" onClick={this.props.calculate} value="=">=</button>
      </div>
    );
  }
}

export default Buttons;
