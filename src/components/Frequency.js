import React, {Component} from 'react';

class Frequency extends Component {
    render(){
        return (
            <div className="Frequency">
                <form>
                    {"I need a schedule for the following "} 
                    <input size="1" onChange={(evt) => this.props.handleDuration(evt)}/>
                    <div className="UnitSelection">
                        <select>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </select>
                    </div>
                    {" and participants should be doing these chores "}
                    {/* <div className="FreqSelection"> */}
                        <select onChange={(evt) => this.props.handleFreq(evt)}>
                            <option value="1">Weekly</option>
                            <option value="2">Every 2 weeks</option>
                            <option value="3">Every 3 weeks</option>
                            {/* <option value="4">Once per month</option> */}
                        </select>
                    {/* </div> */}
                    
                </form>
            </div>
        )
    }
}

export default Frequency;