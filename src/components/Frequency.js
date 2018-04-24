import React, {Component} from 'react';
import DatePicker from 'react-date-picker'

class Frequency extends Component {

    // state = {
    //     date: this.props.startDate,
    //   }

    // //   onChange = (date) => {
    // //       this.setState({ date })
    // //     //   this.props.handleStartDate(date)
    // //   }

    render(){
        return (
            <div className="Frequency">
                <form>
                    {"I need a schedule for the following "} 
                    <input 
                        size="1" 
                        placeholder="8" 
                        onChange={(evt) => this.props.handleDuration(evt)} 
                        onKeyPress={e => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                    <div className="UnitSelection">
                        <select onChange={(evt) => this.props.handleUnits(evt)}>
                            <option value="1">Weeks</option>
                            <option value="4">Months</option>
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
                <div className="DatePicker">
                {"starting on "}
                    <DatePicker
                        onChange={(date) => this.props.handleStartDate(date)}
                        value={this.props.startDate}
                        handleStartDate={this.handleStartDate}
                        minDate={new Date()}
                    />
                </div> 
            </div>
        )
    }
}

export default Frequency;