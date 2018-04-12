import React, { Component } from 'react';

class Names extends Component {
    
    render() {
        return (
            <div className="Names">
                <form onSubmit={(evt) => this.props.handleNameSubmit(evt)}>
                    <input
                        onChange={(evt) => this.props.handleNameChange(evt)}
                        value={this.props.nameInputValue}
                    />
                    <button type="submit">ADD</button>
                </form>
                
            </div>
        )
    }

}

export default Names;