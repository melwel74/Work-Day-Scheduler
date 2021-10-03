//open planner
//the current day is displayed at the top of calendar

setInterval(myTimer, 1000);

function myTimer() {
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(currentDay)
    var currentDayEl = $("#currentDay")
    currentDayEl.text(currentDay)
}

//scroll down
//presented with time blocks for standard business hours
//view time blocks for that day
//each time block is color-coded
//indicate whether it is in the past,present,or future
//click into time block
//enter an event
//click save button for that time block
//text for that event is saved in local storage
//refresh page
//the saved events persist