import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose';

class Task extends Component {
    render(){
        return (
            <div className="Task">
                <span>
                    {this.props.task}
                </span>
                <div className="DeleteButton">
                    <div onClick={() => this.props.handleTaskDelete(this.props.index)}>
                        <FontAwesomeIcon icon={faWindowClose}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;