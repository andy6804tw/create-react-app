import React from 'react';

const person = (props) => {
  return (
      <div>
        <p onClick={props.click}> I'm {props.name} and I'am {props.age} yesrs old.</p>
        <p>{props.children}</p>
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
