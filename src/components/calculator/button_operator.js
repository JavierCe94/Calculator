import React from 'react';

const ButtonOperator = props => {
  return (
    <button className="key--operator" data-action={props.action} 
      onClick={props.executeOperation} value={props.value}>{props.value}</button>
  );
}

export default ButtonOperator;
