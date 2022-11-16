let count = 0;

const counter = document.getElementById("header");
const paragraph = document.getElementById("paragraph");

function increment() {
  count += 1;
  counter.textContent = count;
}

function save() {
  let saveStr = count + "-";
  paragraph.textContent = paragraph.textContent + saveStr;
  counter.textContent = 0;
  count = 0;
}

AOS.init({
  duration: "800",
  delay: "300",
  easing: "ease"
});

// button light mode and dark
function button() {
  body.classList.toggle("darkMode");
}
