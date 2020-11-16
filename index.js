const title = document.getElementById('');
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

let timer = setInterval(play, 200);
