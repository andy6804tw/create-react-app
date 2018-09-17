import React from 'react';

const cockpit=(props)=>{
  const style = {
    backgroundColor: 'red',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
  if(props.showPerson){
    style.backgroundColor = 'green';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'white'
    }
  }
  return (
    <div>
      <h1>Hello World! React</h1>
      <button
        style={style}
        onClick={props.clicked}>Switch Name</button>
    </div>
  );
}

export default cockpit;
