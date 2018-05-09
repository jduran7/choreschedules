import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faRandom} from '@fortawesome/fontawesome-free-solid'
import {faCalendarCheck} from '@fortawesome/fontawesome-free-regular'
import  {AwesomeButton} from 'react-awesome-button';
import '../Button.css';

class MainButton extends Component {

    onClick = (e) => {
        if(this.props.people.length === 0 || this.props.tasks.length === 0) {
            alert("Please make sure you've added some people and tasks");
        }
        else{
            this.props.toggleTable();
            this.props.updateButtonLabel("shuffle");
        }
    }

    render(){
        return(
                <AwesomeButton
                    type="primary"
                    size="medium"
                    action={this.onClick.bind(this)}
                    >
                    <div className="ButtonTextContainer">
                        <span className="MainButtonText">
                            {this.props.mainButtonLabel[0].toUpperCase() + this.props.mainButtonLabel.substring(1)} 
                        </span>
                        <span className="CalendarIcon">
                            <FontAwesomeIcon 
                                icon={this.props.mainButtonLabel === "shuffle" ? faRandom : faCalendarCheck}
                            />
                        </span>
                    </div>
                </AwesomeButton>
        )
    }
}

export default MainButton;