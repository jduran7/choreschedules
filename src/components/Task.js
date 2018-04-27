import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';

class Task extends Component {
    render(){
        return (
            <div className="Task">
                <span>
                    {this.props.task}
                </span>
                <div className="DeleteButton">
                    <div onClick={() => this.props.handleTaskDelete(this.props.index)}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;