var centeredDiv = document.querySelector(".center");

centeredDiv.classList.remove("center");

var headerDiv = document.querySelector("#header");
headerDiv.style.textAlign = "end";


var navList = document.querySelector("#nav");

navList.style.textAlign = "center";
navList.style.listStylePosition = "inside";

navList.style.listStyleType = "circle";

var bottomDiv = document.createElement("div");
bottomDiv.style.textAlign = "start";

var newImg = document.createElement("img");
newImg.src = "../pages/dom.jpg";
newImg.alt = "I'm a bottom div image";

bottomDiv.appendChild(newImg);

document.body.appendChild(bottomDiv);