import React, { Component } from 'react';

import Name from './Name'

class List extends Component {

    state = {
        
    }


    render() {
        return(
            <div className="List">
                {this.props.names.map((name, index) => {
                    return (
                        <Name 
                            key={index}
                            index={index}
                            handleClick={this.props.handleClick}
                            handleNameDelete={this.props.handleNameDelete}
                            name={name}
                        />
                    )
                })} 
            </div>
        )
    }
}

export default List;