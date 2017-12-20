import React from 'react';
import './Person.css'

const person = (props) => {
  return (
      <div className="Person">
        <p onClick={props.click}> I'm {props.name} and I'am {props.age} yesrs old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
};
// class person extends React.Component {
//   render() {
//     return (
//       <p> I'm {this.props.name} and I'am {this.props.age} yesrs old.</p>
//     );
//   }
// }

export default person;
