import React, { Component } from 'react';
import '../App.css';
import NameInput from './NameInput';
import TaskInput from './TaskInput';
import NameList from './NameList';
import TaskList from './TaskList';
import Frequency from './Frequency';
import Table from './Table';
import MainButton from './MainButton';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

class App extends Component {

  state = {
    people: [],
    tasks: [],
    weeks: 8,
    units: 1,
    duration: 8,
    frequency: 1,
    showTable: false,
    startDate: new Date(),
    mainButtonLabel: "generate"
  }

  //validation
  handleDuration = (evt) => {
    if(evt.target.value <= 0) {
      alert('Please add a valid number');
    }
    //parameter processor
    else {
      const units = this.state.units;
      this.setState({ duration: evt.target.value*units });
    }
  }

  //parameter processor
  handleUnits = (evt) => {
    const weeks = this.state.weeks;
    this.setState({units: evt.target.value, duration:weeks*evt.target.value})
  }

  //parameter processor & validation
  handleNameDelete = (index) => {
    //validation
    const people = this.state.people;
    if(people.length === 1 || this.state.tasks.length === 0){ // clears both names and tasks if either is emptied
      this.setState({showTable: false, tasks:[], mainButtonLabel:"generate"});
    }
    people.splice(index, 1);
    this.setState({ people });
  }

  //parameter processor
  handleFreq = (evt) => {
    this.setState({ frequency: evt.target.value });
  }

  //parameter processor & validation
  handleTaskDelete = (index) => {
    const tasks = this.state.tasks;
    //validation
    if(tasks.length === 1 || this.state.people.length === 0){ // clears both names and tasks if either is emptied
      this.setState({showTable: false, people: [], mainButtonLabel:"generate"});
    }
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  //parameter processor
  handleNameChange = (evt) => {
    this.setState({ nameInputValue: evt.target.value })
  }

  //parameter processor
  handleTaskChange = (evt) => {
    this.setState({ taskInputValue: evt.target.value })
  }

  //parameter processor
  handleStartDate = (evt) =>{
    this.setState({ startDate: evt })
  }

  //parameter processor & validation
  handleNameSubmit = (name) => {
    const people = this.state.people;
    //validation
    if (name.length > 0) {
      people.push(name);
      this.setState({ people })
    }
    else{
      alert("please enter a valid name");
    }
  }

  //parameter processor & validation
  handleTaskSubmit = (task) => {

    const tasks = this.state.tasks;
    //validation
    if (task.length > 0){
      tasks.push(task);
      this.setState({ tasks })
    }
    else{
      alert("please enter a valid task");
    }
  }

  //Representation layer
  toggleTable = () => {
    this.setState({ showTable: true})
  }

  //representation layer
  updateButtonLabel = (label) => {
    this.setState({mainButtonLabel:label})
  }

  //representation layer
  onClick = (e) => {
    if(this.state.people.length === 0 || this.state.tasks.length === 0) {
        alert("Please make sure you've added some people and tasks");
    }
    else{
        this.toggleTable();
        this.updateButtonLabel("shuffle");
    }
  }

  //representation layer
  displayTable = () => {
    if(this.state.showTable) {
      return (
        <Table
                people = {this.state.people}
                tasks = {this.state.tasks}
                duration={this.state.duration}
                frequency={this.state.frequency}
                showTable={this.state.showTable}
                toggleTable={this.toggleTable}
                startDate={this.state.startDate}
                mainButtonLabel={this.state.mainButtonLabel}
                updateButtonLabel={this.updateButtonLabel}
          />
      )
    } 
  }

  render() {

    return (
      <div className="App-container">
        {/* <div className="App-title">
          <h1>
            <span class="Span">
              <img id="Title-img" src={require('../img/icons/broom.svg')} alt=""/>
            </span>
            <span class="Text">CHORE SCHEDULE GENERATOR</span>
          </h1>  
        </div> */}
        <div className="App">
          <div className="Settings">
            <div className="Name-input">
              <div className = "Section-title">
                <h4>Names</h4>
              </div>
              <div className="Section-content">
                <NameInput
                  handleNameSubmit={this.handleNameSubmit}
                />
                <NameList
                  handleNameDelete={this.handleNameDelete}
                  people={this.state.people}
                />
              </div>
            </div>
            <div className="TaskInput-input">
              <div className = "Section-title">
                <h4>Tasks</h4>
              </div>
              <div className="Section-content">
                <TaskInput
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
                handleUnits={this.handleUnits}
                showTable = {this.state.showTable}
                generateTable={this.generateTable}
                handleStartDate={this.handleStartDate}
                startDate={this.state.startDate}
                />
              </div>
            </div>
          </div>
          <div className="generatedTable">
            <div className="GenerateButton">
              <MainButton
                  mainButtonLabel={this.state.mainButtonLabel}
                  people={this.state.people}
                  tasks={this.state.tasks}
                  toggleTable={this.toggleTable}
                  updateButtonLabel={this.updateButtonLabel}
                  />
            </div>
            {this.displayTable()}
          </div>
        </div>
        <div className="footerLink">
        {"Made with"} <span >&#9829;</span> {"by "} <a href='http://jduran.me'>Jose Duran</a>
        </div>
        {/* <div className="footerLink">Icons by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a></div> */}
      </div>
    );
  }
}

export default App;
