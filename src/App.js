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
  call = (newName)=>{
    // 使用 this.setState() 修改狀態
    this.setState(
      {
        persons: [
          { name: newName, "age": 21 },
          { name: "Jack2", "age": 22 }
        ]
      }
    );
  }
  nameChange=(event)=>{
    this.setState(
      {
        persons: [
          { name: event.target.value, "age": 21 },
          { name: "Jack2", "age": 22 }
        ]
      }
    );
  }

  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>Hello World! React</h1>
        <button 
        style={style}
        onClick={this.call.bind(this,"new Andy")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={()=>this.call("new Andy2")}
        changed={this.nameChange}/>  
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby is coding</Person>
      </div>

    );
  }
}

export default App;
