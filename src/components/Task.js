import React, {Component} from 'react';

class Task extends Component {
    render(){
        return (
            <div className="Task">
                <span>
                    {this.props.task.value}
                </span>
                <div className="DeleteButton">
                    <button onClick={() => 
                        this.props.handleTaskDelete(this.props.index)}
                    >X</button>
                </div>
            </div>
        )
    }
}

export default Task;