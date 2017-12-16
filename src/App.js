import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World! React</h1>
        <Person name="Andy" age="21"/>
        <Person name="Jack" age="22">Hobby is coding</Person>
      </div>

    );
  }
}

export default App;
