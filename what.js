function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".todocontainer li");
// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);







const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
  matrix = str.split("");

let font = 11,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#2cbcc4";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 123);

window.addEventListener("resize", () => location.reload());