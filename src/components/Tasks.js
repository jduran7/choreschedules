import React, { Component } from 'react';

class Tasks extends Component {
    
    render() {
        return (
            <div className="Tasks">
                <form onSubmit={(evt) => this.props.handleTaskSubmit(evt)}>
                    <input
                        type="text"
                        onChange={(evt) => this.props.handleTaskChange(evt)}
                        value={this.props.taskInputValue}
                    />
                    <div className="CircleButton"><button className="CircleText NoSelect" type="submit">+</button></div>
                </form>
            </div>
        )
    }
}

export default Tasks;