import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name:"Andy","age":21},
      {name:"Jack","age":22}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World! React</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby is coding</Person>
      </div>

    );
  }
}

export default App;
