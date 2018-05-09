import React, { Component } from 'react';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/fontawesome-free-solid'
import Radium, {StyleRoot} from 'radium';
import zoomIn from 'react-animations/lib/zoom-in';

const styles = {
    zoomIn: {
        animationDuration: '1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
      }
  }

class Table extends Component {

    constructor() {
        super();
        this.state = {
            displayTable: false
        }
    }

    render(){

        var myTasks = this.props.tasks;
        
        var jsPDF = require('jspdf');
        require('jspdf-autotable');

        function exportPDF() {
            var doc = new jsPDF("l", 'pt', "a4");
            doc.setTextColor("#7491c1");
            doc.setFontSize(9);
            doc.text(
                "Schedule generated with CSG (http://choresg.com)", 
                633, 
                15, 
                {styles:{fontStyle: 'italic'}}
            );
            var elem = document.getElementById("myGeneratedHtmlTable");
            var res = doc.autoTableHtmlToJson(elem);

            doc.autoTable(res.columns, res.data, {
                theme: 'striped',
                startY: 40,
                margin: { horizontal: 0 },
                bodyStyles: { valign: 'middle' },
                styles: { 
                    overflow: 'linebreak', 
                    columnWidth: 'auto', 
                    halign: 'center', 
                    valign: 'middle' 
                },
                columnStyles: {
                    0: {
                      columnWidth: 'wrap',
                      halign: 'left',
                      fontStyle: 'bold'
                    }
                  },
                drawRow: function (row, data) {
                    row.height = 30
                }
            })
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

        function generateList(weeks,interval, start) {
            var weekList = [];
            for (var i=0;i<weeks/interval;i++) {
                weekList.push(
                    getWeek(moment(start).add(i*interval,'week'),interval)
                );
            }
            return weekList;
        }

        var myDate = this.props.startDate;

		function assignChores(people, tasks, weeks, interval){
          var myPeople = shuffle(people);
          var myList = generateList(weeks, interval, myDate);
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

        var source = assignChores(this.props.people, this.props.tasks, 
            this.props.duration, this.props.frequency);
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
            
			return {__html: '<table id="myGeneratedHtmlTable" class="table" style="font-size:12px;">'+table+'</table>'};
        }
 
        return (
            <div className="MyTable">
                <StyleRoot>
                    {this.props.showTable && <div id="generatePdf" className="NoSelect" style={styles.zoomIn} dangerouslySetInnerHTML={renderTable()} />}
                    {this.props.showTable && <div className="PdfButton"><button id="export" onClick={exportPDF} >Download <b>PDF</b> <div className="RedPdf"><FontAwesomeIcon icon={faFilePdf}/></div></button></div>}
                </StyleRoot>
            </div>
        )
    }
}

export default Table;