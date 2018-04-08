import React, { Component } from 'react';

class Table extends Component {
    render(){
        return (
            <div className="myTable">
                <div id="main">
                	<table className="striped centered">
                		{this.props.builtTable}
                	</table>
                </div>
            </div>
        )
    }
}

export default Table;