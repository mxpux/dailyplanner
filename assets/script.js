// Set some time variables taken from moment.js cdn
var todayDay = moment().format("dddd")
var currentDate = moment().format("MMMM Do")
var currentTime = moment().format("hA")
var currentHour = parseInt(moment().format("h"))
var dateDisplay = $("#currentDay")

dateDisplay.text(todayDay + ", " + currentDate)


//spot check
console.log("The current time is: " + currentTime);
console.log("currentTime comes from Moment as a: " + typeof currentTime);
console.log("------------------");

