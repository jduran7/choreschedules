import React, {Component} from 'react';

class Name extends Component {
    render(){
        return (
            <div className="Name">
                <span>
                    {this.props.name.value}
                </span>
                <div className="DeleteButton">
                <button onClick={() => 
                    this.props.handleNameDelete(this.props.index)}
                >X</button>
                </div>
            </div>
        )
    }
}

export default Name;