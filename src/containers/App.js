import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    console.log('click');
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
    let persons = null;
    if (this.state.showPerson) {
      persons = (
          <Persons 

          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChange}/>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          {/* 按鈕顯示資料使用js判斷 */}
          <Cockpit 
          showPerson={this.state.showPerson}
            clicked={this.showPerson}/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
