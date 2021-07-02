//date using moment.js

var todayDay = moment().format("dddd")
var currentDate = moment().format("MMMM Do")
var currentTime = moment().format("hA")
var currentHour = parseInt(moment().format("h"))
var dateDisplay = $("#currentDay")

dateDisplay.text(todayDay + ", " + currentDate)
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// Get the current hour via Moment JS
var currentHour = moment().hour();

// check the timeblock availability
// by using loop, this method will check if the current time and 
// the timeblock availability value 
  $(".time-block").each(function() {
       var checkHour = parseInt($(this).attr("id"));
      // by using remove class, it will set the colors to the exact timeblock and current time
       $(this).removeClass("past present future");
   
  // As the above stated, now the statement below will determine and
  // to see or "check" the hour if it matches the current hour.
  // If the condition matches, it will add the class the "current hour" belong to.
  if (checkHour < currentHour) {    
    $(this).addClass("past");
  }
  else if (checkHour === currentHour) {
    $(this).addClass("present");    
  }
  else if (checkHour > currentHour) {
    $(this).addClass("future");
  }
});




