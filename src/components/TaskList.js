import React, { Component } from 'react';
import Task from './Task'
import Radium, {StyleRoot} from 'radium';
import pulse from 'react-animations/lib/pulse';

const styles = {
    pulse: {
        animation: 'x 0.1s',
        animationName: Radium.keyframes(pulse, 'pulse')
        }
}

class TaskList extends Component {


    render() {
        return(
            <div className="TaskList">
                {this.props.tasks.map((task, index) => {
                    return (
                        <StyleRoot style={styles.pulse}>
                            <Task 
                                key={index}
                                index={index}
                                handleClick={this.props.handleClick}
                                handleTaskDelete={this.props.handleTaskDelete}
                                task={task}
                            />
                        </StyleRoot>
                    )
                })} 
            </div>
        )
    }
}

export default TaskList;