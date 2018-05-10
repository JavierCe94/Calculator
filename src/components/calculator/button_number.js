import React from 'react';

const ButtonNumber = props => {
  return (
    <button onClick={props.addNumber} value={props.value}>{props.value}</button>
  );
}

export default ButtonNumber;
