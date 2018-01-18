import React from 'react';


const validation = (props) => {

  let validationText;
  if(props.textSize>5)
    validationText = (<p>Text long enough</p>)
  else
    validationText = (<p>Text too short</p>)
  return (
    <div className="validation">
      {validationText}
    </div>
  )
};

export default validation;
