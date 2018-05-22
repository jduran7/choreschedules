import React, { Component } from 'react';


let errorMessage = {
    'name': [],
    'tasks': [],
    'time': []
};

//check if name character count is less than 40
if(props.name.length < 40){
    errorMessage.name.push("The name is too long! (max is 40 characters)");
}

//checking if it is not empty is done at app.js level function


//check if task character count is less than 70
if(props.name.task < 70){
    errorMessage.name.push("The task is too long! (max is 70 characters)");
}

//check if date is in the right format (done by moment.js) and within the right timeframe ()
const start = this.props.start;
const end = this.props.end;

if(start > end){
    return true;
}

const range = moment.range(start,end);
const timediff = range.diff('days')


//checking if length is less than 2yrs + 1m and that the difference is positive (start date being before end date)
if(timediff > 761) {
    return true;
}


return errorMessage;
