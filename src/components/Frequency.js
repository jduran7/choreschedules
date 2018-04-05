import React, {Component} from 'react';

class Name extends Component {
    render(){
        return (
            <div className="Frequency">
                <form>
                    {"for  "} 
                    <input size="1"/>
                    <div className="UnitSelection">
                        <select>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Name;