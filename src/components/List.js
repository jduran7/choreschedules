import React, { Component } from 'react';
import Name from './Name'
import Radium, {StyleRoot} from 'radium';
import pulse from 'react-animations/lib/pulse';

const styles = {
    pulse: {
        animation: 'x 0.1s',
        animationName: Radium.keyframes(pulse, 'pulse')
        }
}

class List extends Component {

    state = {
        
    }


    render() {
        return(
            <div className="List">
                {this.props.names.map((name, index) => {
                    return (
                        <StyleRoot style={styles.pulse}>
                            <Name 
                                key={index}
                                index={index}
                                handleClick={this.props.handleClick}
                                handleNameDelete={this.props.handleNameDelete}
                                name={name} 
                            />
                        </StyleRoot>
                    )
                })} 
            </div>
        )
    }
}

export default List;