import React, { Component } from 'react';
import '../App.css';
import Names from './Names';
import Tasks from './Tasks';
import List from './List';
import TaskList from './TaskList';
import Frequency from './Frequency';
import Schedule from './Schedule';
import moment from 'moment';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

class App extends Component {

  state = {
    nameInputValue: '',
    taskInputValue: '',
    names: [],
    tasks: [],
    duration: 8,
    frequency: 1,
    startDate: ''
  }

  handleDuration = (evt) => {
    console.log('changed duration');
    this.setState({ duration: evt.target.value });
  }

  handleNameDelete = (index) => {
    console.log('delete clicked', index);
    const names = this.state.names;
    names.splice(index, 1);
    this.setState({ names });
  }

  handleFreq = (evt) => {
    console.log('changed frequency');
    this.setState({ frequency: evt.target.value });
  }

  handleTaskDelete = (index) => {
    console.log('delete clicked', index);
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  handleNameChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ nameInputValue: evt.target.value })
  }

  handleTaskChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ taskInputValue: evt.target.value })
  }

  handleNameSubmit = (evt) => {
    evt.preventDefault();
    const newName = {
      value: this.state.nameInputValue
    };
    const names = this.state.names;
    names.push(newName);
    this.setState({ names, nameInputValue:'' })
  }

  handleTaskSubmit = (evt) => {
    evt.preventDefault();
    const newTask = {
      value: this.state.taskInputValue
    };
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks, taskInputValue:'' })
  }

  render() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div className="App">
        <div className="Settings">
          <div className="Name-input">
            <h2>Names</h2>
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
          <div className="Tasks-input">
            <h2>Tasks</h2>
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
          <div className="Length-freq">
            <h2>Length and Frequency</h2>
            <Frequency 
            handleDuration={this.handleDuration}
            duration ={this.state.duration}
            handleFreq={this.handleFreq}
            />
          </div>
        </div>
        <div className="Schedule">
          <Schedule 
            people={this.state.names}
            tasks={this.state.tasks}
            duration={this.state.duration}
            frequency={this.state.frequency}
          />
          <InfiniteCalendar
            width={300}
            height={400}
            selected={today}
            minDate={today}
          />
        </div> 
      </div>
    );
  }
}

export default App;
