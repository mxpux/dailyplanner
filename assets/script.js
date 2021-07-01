// Set some time variables taken from moment.js cdn
var toDay = moment().format("dddd");
var currentDate = moment().format("MMMM Do");
var currentTime = moment().format("hA");
var currentHour = parseInt(moment().format("h"));

//spot check
console.log("The current time is: " + currentTime);
console.log("currentTime comes from Moment as a: " + typeof currentTime);

if (currentTime < "7PM") {
  console.log("Current time is <7PM");
} else {
  console.log("It should be after 7PM");
}

console.log("------------------");