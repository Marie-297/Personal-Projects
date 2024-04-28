//name my variables
const date = document.getElementById("date");
const events = document.getElementById("ocassion");
const eventInput = document.querySelector(".event");
const days = document.querySelector(".numberdays");
const hours = document.querySelector(".numberhours");
const minutes = document.querySelector(".numberminutes");
const seconds = document.querySelector(".numberseconds");

// a function to calculate the number of days, hours,minutes and seconds
function setCountDown() {
  // assigning the event type to the span element in our header element
  eventInput.innerHTML = events.value
  let d = date.value

  // getting the event date in milliseconds
  const eventDate = new Date(d).getTime();

  // getting the current date in milliseconds
  const currentDate = new Date().getTime();

  // finding the difference between the current date and the event date
  const difference = Math.floor(eventDate - currentDate)/1000
  
  // using the difference to calculate days, hours, minutes, and seconds left
  const daysElement = Math.floor(difference/3600/24);
  const hoursElement = Math.floor(difference/3600) % 24;
  const minutesElement = Math.floor(difference/60) % 60;
  const secondsElement = Math.floor(difference) % 60;
 
  // assigning the calculated to their corresponding class element in the HTML document
  days.innerHTML = daysElement;
  hours.innerHTML = hoursElement;
  minutes.innerHTML = minutesElement;
  seconds.innerHTML = secondsElement;
}

// Run the setCountDown function every second equivalent to 1000 milliseconds
setInterval(setCountDown, 1000)
