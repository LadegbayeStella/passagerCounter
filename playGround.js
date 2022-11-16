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
    easing: "ease",

});


// button light mode and dark
function button() {
    let text = document.querySelector("h1")
    // let body = document.getElementById("body");
    let header = document.getElementById("header");

    if (body.style.backgroundColor === "black") {
        // body.style.backgroundColor = "black";
        // text.style.color = "white";  
        // header.style.color = "white";
        body.classList.toggle("darkMode");

    }
    else {
        // text.style.color = "black";
        // body.style.backgroundColor = "white"
        // header.style.color = "black";
        body.classList.toggle("darkMode");
    }
}