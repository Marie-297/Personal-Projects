const date = document.getElementById("date");
const events = document.getElementById("ocassion");

const eventInput = document.querySelector(".event");
const days = document.querySelector(".numberdays");
const hours = document.querySelector(".numberhours");
const minutes = document.querySelector(".numberminutes");
const seconds = document.querySelector(".numberseconds");


function setCountDown() {
  eventInput.innerHTML = events.value
  let d = date.value
  const eventDate = new Date(d).getTime();
  const currentDate = new Date().getTime();
  const difference = Math.floor(eventDate - currentDate)/1000
  
  
  const daysElement = Math.floor(difference/3600/24);
  const hoursElement = Math.floor(difference/3600) % 24;
  const minutesElement = Math.floor(difference/60) % 60;
  const secondsElement = Math.floor(difference) % 60;
 
  
  days.innerHTML = daysElement;
  hours.innerHTML = hoursElement;
  minutes.innerHTML = minutesElement;
  seconds.innerHTML = secondsElement;
}
setInterval(setCountDown, 1000)
