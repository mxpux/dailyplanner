//date using moment.js

var todayDay = moment().format("dddd")
var currentDate = moment().format("MMMM Do")
var currentTime = moment().format("hA")
var currentHour = parseInt(moment().format("h"))
var dateDisplay = $("#currentDay")

dateDisplay.text(todayDay + ", " + currentDate)

var currentHour = moment().hour();
$(".time-block").each(function() {
  var checkHour = parseInt($(this).attr("id"));
  $(this).removeClass("past present future");
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




