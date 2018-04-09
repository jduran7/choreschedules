import React, { Component } from 'react';
import moment from 'moment';


class Schedule extends Component {

    render() {



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


        return(
            <div className="Schedule">
                <div className="currentState">
                    <h3>Your current state is:</h3>
                    <ul>
                        <li><b>People:</b> [{this.props.people.join(", ")}]</li>
                        <li><b>Tasks:</b> [{this.props.taskList.join(", ")}]</li>
                        <li><b>Duration:</b> {this.props.duration}</li>
                        <li><b>Frequency:</b> {this.props.frequency}</li>
                    </ul>
                </div>
                <div className="tableElements">
                    <h3>Table elements:</h3>
                    <ul>
                        <li><b>Shuffled name array:</b> {shuffle(this.props.people).join(", ")}</li>
                        <li><b>Shuffled task list:</b> {shuffle(this.props.taskList).join(", ")}</li>
                        <li><b>Weeklist:</b> {generateList(this.props.duration, this.props.frequency).join(", ")}.</li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default Schedule;