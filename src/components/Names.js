import React, { Component } from 'react';

class Names extends Component {
    constructor(props) {
            super(props);
            this.state = {
                inputValue: ""
            }
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleNameSubmit(this.state.inputValue);
        this.setState({inputValue: ""})
    }

    render() {
        return (
            <div className="Names">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={(evt) => this.handleChange(evt)}
                        value={this.state.inputValue}
                    />
                    <div className="CircleButton"><button className="CircleText NoSelect" type="submit">+</button></div>
                </form>
            </div>
        )
    }

}

export default Names;