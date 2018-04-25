import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCalendarCheck from '@fortawesome/fontawesome-free-solid/faCalendarCheck';
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose';

class Name extends Component {
    render(){
        return (
            <div className="Name">
                    <span>
                        {this.props.name}
                    </span>
                <div className="DeleteButton">
                    <div onClick={() => this.props.handleNameDelete(this.props.index)}>
                        <FontAwesomeIcon icon={faWindowClose}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Name;