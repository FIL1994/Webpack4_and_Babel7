import "./index.css";
import "./style.scss";

console.log("hello");

let myDiv = document.createElement("div");
myDiv.innerHTML = "hello from index.js";
document.body.appendChild(myDiv);

document.querySelector("h1").style.fontStyle = "italic";
