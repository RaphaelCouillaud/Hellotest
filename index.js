/*const title = document.getElementById('');
const text = "L'agence web unipersonnelle";

let index = 0;

const randomSpeed = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const play = () => {
	title.innerHTML = text.slice(0, index);

	index ++;

	if (index > text.length) {
		index = 0;
	}

	clearInterval(timer);
	timer = setInterval(play, randomSpeed(50, 200));
};

let timer = setInterval(play, 200);*/

/*function parallax() {
const paral = document.getElementById("pp");	
	paral.style.top = -(window.pageYOffset / 8) + "px";
		console.log(window.pageYOffset);
};*/

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

