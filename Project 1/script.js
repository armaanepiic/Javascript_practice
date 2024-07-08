const body = document.getElementById("circle");
const text = document.getElementsByTagName("h3")[0];
function setColor(name) {
    body.style.background = name;
    text.style.color = name;
}
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = color;
    text.style.color = color;
}