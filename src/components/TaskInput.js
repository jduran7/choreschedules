import React, { Component } from 'react';

class TaskInput extends Component {

    constructor(props) {
            super(props);
            this.state = {
                inputValue: ""
            }
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleTaskSubmit(this.state.inputValue);
        this.setState({inputValue: ""})
    }

    render() {
        return (
            <div className="TaskInput">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={(evt) => this.handleChange(evt)}
                        value={this.state.inputValue}
                    />
                    <div className="CircleButton"><button className="CircleText NoSelect" type="submit">+</button></div>
                </form>
            </div>
        )
    }
}

export default TaskInput;