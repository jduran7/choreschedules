import React, { Component } from 'react';

import Task from './Task'

class TaskList extends Component {

    state = {
        
    }


    render() {
        return(
            <div className="TaskList">
                {this.props.tasks.map((task, index) => {
                    return (
                        <Task 
                            key={index}
                            index={index}
                            handleClick={this.props.handleClick}
                            handleTaskDelete={this.props.handleTaskDelete}
                            task={task}
                        />
                    )
                })} 
            </div>
        )
    }
}

export default TaskList;