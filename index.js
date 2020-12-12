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









const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



