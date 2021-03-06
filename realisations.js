const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const slideNav = document.getElementById("carousel-slide-nav");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let slidePos = 0;
let navigation = slideNav.childNodes;

slideNavigation();

function displaySlide(element, className) {
  for (let item = 0; item < totalSlides; item++) {
    item === slidePos
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlide() {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function slideNavigation() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === slidePos) {
      span.classList.add("nav-current");
    }
    slideNav.append(span);
    span.addEventListener("click", function () {
      slidePos = slide;
      displaySlide(slides, "carousel-item-visible");
      displaySlide(navigation, "nav-current");
    });
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 7500);







var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};





const allBlocs = document.querySelectorAll('.listeprojets');


allBlocs.forEach(listeprojets => {
    listeprojets.addEventListener('click', (e) => {

        // console.log(e.target);
        e.target.classList.add('active');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }
        

    })
})

const buttons = document.querySelectorAll('a');

buttons.forEach(a => {
    a.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})
const vid = document.querySelectorAll('video');

vid.forEach(video => {
    video.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})


