const TIMER = document.querySelector(".limited-offer__timer-timer");

let hours = '00'
let minutes = 10
let seconds = 0

TIMER.textContent = hours + ' : ' + String(minutes) + ' : 0' + String(seconds)

let getTime = () => {
  if (seconds == 0) {
    seconds = 59
    minutes = minutes - 1
  } else {
    seconds = seconds - 1
  }
  if (minutes == -1) {
    minutes = 10
    seconds = 0
  }
  let typeTime = (numb) => {
    if (numb < 10) {
      return (numb = '0'+ String(numb))
    }
    else {
      return numb
    }
  }
  TIMER.textContent = hours + ' : ' + typeTime(minutes) + ' : ' + typeTime(seconds)
}

setInterval(function(){getTime()}, 1000)
