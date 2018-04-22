import React, { Component } from 'react';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFilePdf, faCalendarCheck} from '@fortawesome/fontawesome-free-solid'

class Table extends Component {

    constructor() {
        super();
        this.state = {
            displayTable: false
        }
    }

    onClick = (e) => {
        e.preventDefault();
        if(this.props.people.length === 0 || this.props.tasks.length === 0) {
            alert("Please make sure you've added some people and tasks");
        }
        else{
            this.setState({displayTable: true})
        }
    }

    render(){

        var myTasks = this.props.tasks;
        
        var jsPDF = require('jspdf');
        require('jspdf-autotable');

        function exportPDF() {
            var doc = new jsPDF();
            doc.text("Schedule generated with CSG", 14, 16);
            doc.text("Please visit", 14, 16, {startY: 20});
            var elem = document.getElementById("myGeneratedHtmlTable");
            var res = doc.autoTableHtmlToJson(elem);
            doc.autoTable(res.columns, res.data, {startY: 30});
            doc.save('Schedule.pdf');
        }

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
		var cols = this.props.tasks.length;

    	function renderTable() {
    		var table = '';
    		table+='<thead class="thead-light"><tr><td></td>'; 
			for(var i=0;i<myTasks.length;i++){
			  table+='<td><b>'+myTasks[i]+'</b></td>';
			}
			table+='</tr></thead>';

			for(var r=0;r<rows.length;r++){
			  table+='<tr><td>'+rows[r]+'</td>';
			  for(var c=0;c<cols;c++){
			    table+='<td><div id="names">'+source[rows[r]][c]+'</div></td>';
			  }
			  table+='</tr>';
            }
            
			return {__html: '<table id="myGeneratedHtmlTable" class="table" style="font-size:0.8em;">'+table+'</table>'};
        }


        return (
            <div className="MyTable">
                <div className="GenerateButton">
                    <button className="CalendarButton" onClick={this.onClick.bind(this)}>Generate <FontAwesomeIcon className="CalendarIcon" icon={faCalendarCheck}/></button>
                </div>
                {this.state.displayTable && <div id="generatePdf" dangerouslySetInnerHTML={renderTable()}/>}
                {this.state.displayTable && <div className="PdfButton"><button id="export" onClick={exportPDF} >Download <b>PDF</b> <div className="RedPdf"><FontAwesomeIcon icon={faFilePdf}/></div></button></div>}
            </div>
        )
    }
}

export default Table;