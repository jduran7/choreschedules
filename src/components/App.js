import React, { Component } from 'react';
import '../App.css';
import Names from './Names';
import Tasks from './Tasks';
import List from './List';
import TaskList from './TaskList';
import Frequency from './Frequency';
// import Schedule from './Schedule';
// import Calendar from 'react-calendar';
import Table from './Table';
// import moment from 'moment';
// import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet




class App extends Component {

  state = {
    nameInputValue: '',
    taskInputValue: '',
    names: [],
    tasks: [],
    duration: 8,
    frequency: 1,
    startDate: '',
    people: [],
    taskList: []
  }

  handleDuration = (evt) => {
    // console.log('changed duration');
    this.setState({ duration: evt.target.value });
  }

  handleNameDelete = (index) => {
    // console.log('delete clicked', index);
    const names = this.state.names;
    const people = this.state.people;
    names.splice(index, 1);
    people.splice(index, 1)
    this.setState({ names, people });
  }

  handleFreq = (evt) => {
    // console.log('changed frequency');
    this.setState({ frequency: evt.target.value });
  }

  handleTaskDelete = (index) => {
    // console.log('delete clicked', index);
    const tasks = this.state.tasks;
    const myTasks = this.state.taskList;
    tasks.splice(index, 1);
    myTasks.splice(index, 1);
    this.setState({ tasks, taskList:myTasks });
  }

  handleNameChange = (evt) => {
    // console.log(evt.target.value);
    this.setState({ nameInputValue: evt.target.value })
  }

  handleTaskChange = (evt) => {
    // console.log(evt.target.value);
    this.setState({ taskInputValue: evt.target.value })
  }

  handleNameSubmit = (evt) => {
    evt.preventDefault();
    const newName = {
      value: this.state.nameInputValue
    };
    const names = this.state.names;
    const myPeople = this.state.people;

    if (newName.value.length > 0) {
      names.push(newName);
      myPeople.push(newName.value);
      this.setState({ names, nameInputValue:'' , people:myPeople})
    }
    else{
      alert("please add a valid name");
    }
  }

  handleTaskSubmit = (evt) => {
    evt.preventDefault();
    const newTask = {
      value: this.state.taskInputValue
    };
    const tasks = this.state.tasks;
    const myTasks = this.state.taskList;
    if (newTask.value.length > 0){
      tasks.push(newTask);
      myTasks.push(newTask.value);
      this.setState({ tasks, taskInputValue:'', taskList: myTasks })
    }
    else{
      alert("please add a valid task");
    }
  }

  render() {

    return (
      <div className="App-container">
        <div className="App-title">
          {/* <h1>Chore schedule generator </h1> */}
        </div>
        <div className="App">
          <div className="Settings">
            <div className="Name-input">
              <div className = "Section-title">
                <h4>Names</h4>
              </div>
              <div className="Section-content">
                <Names
                  handleNameChange={this.handleNameChange}
                  nameInputValue={this.state.nameInputValue}
                  handleNameSubmit={this.handleNameSubmit}
                />
                <List
                  handleNameDelete={this.handleNameDelete}
                  names={this.state.names}
                />
              </div>
            </div>
            <div className="Tasks-input">
              <div className = "Section-title">
                <h4>Tasks</h4>
              </div>
              <div className="Section-content">
                <Tasks
                  handleTaskChange={this.handleTaskChange}
                  taskInputValue={this.state.taskInputValue}
                  handleTaskSubmit={this.handleTaskSubmit}
                />
                <TaskList
                  handleTaskDelete={this.handleTaskDelete}
                  tasks={this.state.tasks}
                />
              </div>
            </div>
            <div className="Length-freq">
              <div className = "Section-title">
                <h4>Length & Frequency</h4>
              </div>
              <div className="Section-content">
                <Frequency 
                handleDuration={this.handleDuration}
                duration ={this.state.duration}
                handleFreq={this.handleFreq}
                showTable = {this.state.showTable}
                generateTable={this.generateTable}
                />
              </div>
            </div>
          </div>
          <div className="generatedTable">
            <Table
              people = {this.state.people}
              tasks = {this.state.taskList}
              duration={this.state.duration}
              frequency={this.state.frequency}
            />
          </div>
        </div>
        <div className="footerLink">
        {"Made with"} <span >&#9829;</span> {"by "} <a href='http://jduran.me'>Jose Duran</a>
        </div>
      </div>
    );
  }
}

export default App;
