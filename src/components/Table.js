import React, { Component } from 'react';
import moment from 'moment';

class Table extends Component {
    render(){

    	var tasks = this.props.tasks;

    	function shuffle(array) {
            var copy = array.slice(), newArray = [], n = array.length, i;

            // While there remain elements to shuffle…
            while (n) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * copy.length);

                // If not already shuffled, move it to the new array.
                if (i in copy) {
                  newArray.push(copy[i]);
                  delete copy[i];
                  n--;
                }
            }
            return newArray;
        }

        function getWeek(x,interval) {
            var firstDay = x.weekday(1).format('MMMM DD');
            var lastDay = x.clone().add(6*interval+(interval-1),"day");
            if(lastDay.format('MMMM')!== x.format('MMMM')){
                lastDay = lastDay.format('MMMM DD');
            }
            else{
                lastDay = lastDay.format('DD');
            }
            return firstDay + " - " + lastDay;
        }

        function generateList(weeks,interval) {
            var weekList = [];
            for (var i=0;i<weeks/interval;i++) {
                weekList.push(getWeek(moment().clone().add(i*interval,'week'),interval));
            }
            return weekList;
        }

		function assignChores(people, tasks, weeks, interval){
          var myPeople = shuffle(people);
          var myList = generateList(weeks, interval);
          var sequence = [];
          var sortedSequence = [];
          var finalSchedule = {};
          
          for(var i=0;i<weeks/interval;i++){
            for(var j=0;j<tasks.length;j++){
              sequence.push(myPeople[(i+j)%myPeople.length]);
            }
            sortedSequence.push(sequence);
            sequence = [];
          }

          for(var k=0;k<sortedSequence.length;k++){
            finalSchedule[myList[k]] = sortedSequence[k];
          }

          return finalSchedule;
        }

        var source = assignChores(this.props.people, this.props.tasks, this.props.duration, this.props.frequency);
		var rows = Object.keys(source);
		var cols = tasks.length;

    	function renderTable() {
    		var table = '';
    		table+='<thead><tr><td></td>'; 
			for(var i=0;i<tasks.length;i++){
			  table+='<td><b>'+tasks[i]+'</b></td>';
			}
			table+='</tr></thead>';

			for(var r=0;r<rows.length;r++){
			  table+='<tr><td>'+rows[r]+'</td>';
			  for(var c=0;c<cols;c++){
			    table+='<td><div id="names">'+source[rows[r]][c]+'</div></td>';
			  }
			  table+='</tr>';
			}
			return table;
    	}

    	


        return (
            <div className="myTable">
                <div id="main">
                	<table className="striped centered">
                		{renderTable()}
                		{console.log(source)}
                	</table>
                </div>
            </div>
        )
    }
}

export default Table;