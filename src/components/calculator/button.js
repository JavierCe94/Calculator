import React from 'react';

const Button = props => {
  return (
    <button className={props.class} data-action={props.action} onClick={props.event} 
      value={props.value}>{props.value}</button>
  );
}

export default Button;
