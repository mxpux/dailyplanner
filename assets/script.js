//date using moment.js

var todayDay = moment().format("dddd")
var currentDate = moment().format("MMMM Do")
var currentTime = moment().format("hA")
var currentHour = parseInt(moment().format("h"))
var dateDisplay = $("#currentDay")

dateDisplay.text(currentTime + " " + todayDay + ", " + currentDate)
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

  $(".saveBtn").on("click", function () {
  // save Agenda to local storage
  saveAgenda = $(this).siblings(".formControl").val();
  console.log(saveAgenda);
  // save time-block to local storage
  saveTime = $(this).closest(".time-block").attr("id");
  console.log(saveTime);
  localStorage.setItem(saveTime, saveAgenda);

  // Text area and form control to see the saved Agenda item in Console
  $("9 .formControl").val(localStorage.getItem("9"));
  $("10 .formControl").val(localStorage.getItem("10"));
  $("11 .formControl").val(localStorage.getItem("11"));
  $("12 .formControl").val(localStorage.getItem("12"));
  $("13 .formControl").val(localStorage.getItem("12"));
  $("14 .formControl").val(localStorage.getItem("14"));
  $("15 .formControl").val(localStorage.getItem("15"));
  $("16 .formControl").val(localStorage.getItem("16"));
  $("17 .formControl").val(localStorage.getItem("17"));

})


