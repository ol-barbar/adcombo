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

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// import Swiper from "/swiper.js";

let swiperContainer = document.querySelector('.swiper')
let swiperList = document.querySelector('.swiper-wrapper')
let swiperSlide = document.querySelectorAll('.swiper-slide')
const windowWidth = window.innerWidth;

if (windowWidth >= 1280) {
  swiperContainer.classList.remove('swiper')
  swiperList.classList.remove('swiper-wrapper')
  console.log(swiperSlide.length)
  for (let i=0; i<swiperSlide.length; i++) {
    swiperSlide[i].classList.remove('swiper-slide')
  }

}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'limited-offer__slider-toggle-button',
    bulletActiveClass: 'limited-offer__slider-toggle-button--active'
  },
})
