import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';

class Name extends Component {
    render(){
        return (
            <div className="Name">
                    <span>
                        {this.props.name}
                    </span>
                <div className="DeleteButton">
                    <div onClick={() => this.props.handleNameDelete(this.props.index)}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Name;