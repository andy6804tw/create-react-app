import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: "Andy", "age": 21 },
      { id: "2", name: "Jack", "age": 22 }
    ],
    showPerson: false
  }
  call = (newName) => {
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
  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {
        persons: persons
      }
    );
  }

  showPerson = () => {
    const bool = this.state.showPerson;
    this.setState({ showPerson: !bool });
  }

  deletePerson = (index) => {
    //const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              key={person.id}
              changed={(event) => this.nameChange(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World! React</h1>
        <button
          style={style}
          onClick={this.showPerson}>Switch Name</button>
        {/* 按鈕顯示資料使用js判斷 */}
        {persons}
      </div>

    );
  }
}

export default App;
