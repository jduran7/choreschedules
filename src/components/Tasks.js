import React, { Component } from 'react';

class Tasks extends Component {
    
    render() {
        return (
            <div className="Tasks">
                <form onSubmit={(evt) => this.props.handleTaskSubmit(evt)}>
                    <input
                        onChange={(evt) => this.props.handleTaskChange(evt)}
                        value={this.props.taskInputValue}
                    />
                    <button className="AddButton" type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

export default Tasks;