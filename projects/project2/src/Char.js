import React from 'react';


const Char = (props) => {

  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid'
  };
  return (
    <div className="Char" style={style} onClick={props.click}>
      {props.character}
    </div>
  )
};

export default Char;
