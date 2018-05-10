import React from 'react';

const Display = props => {
  return (
    <div className="calculator__display">{props.actualValueDisplay}</div>
  );
}

export default Display;
