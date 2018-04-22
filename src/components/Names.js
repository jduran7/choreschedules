import React, { Component } from 'react';

class Names extends Component {
    
    render() {
        return (
            <div className="Names">
                <form onSubmit={(evt) => this.props.handleNameSubmit(evt)}>
                    <input
                        type="text"
                        onChange={(evt) => this.props.handleNameChange(evt)}
                        value={this.props.nameInputValue}
                    />
                    <button className="AddButton" type="submit">+</button>
                </form>
            </div>
        )
    }

}

export default Names;