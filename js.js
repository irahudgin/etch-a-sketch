function darken(e) {
  let pixelstyles = window.getComputedStyle(this);
  let opacity = parseFloat(pixelstyles.getPropertyValue("opacity"));
  this.style.setProperty("opacity", `${opacity - 0.1}`);
}

function colors(e) {
  let red = Math.floor(Math.random() * 255) + 50;
  let green = Math.floor(Math.random() * 255) + 50;
  let blue = Math.floor(Math.random() * 255) + 50;
  this.style.setProperty("background-color", `rgb(${red}, ${green}, ${blue})`);
}

function classic(e) {
  this.style.setProperty("background-color", "rgb(100, 100, 100)");
}

function resolutionChange(e, func) {
  //Clears last pixel count
  const otherbuttons = document.querySelectorAll("button");
  otherbuttons.forEach((button) => {
    button.classList.remove("buttonclicked");
  });

  console.log(e);

  if (e.target == document) {
    const button = document.querySelector("#classic");
    button.classList.add("buttonclicked");
  } else if (e.target.id == "slider") {
    const button = document.querySelector("#classic");
    button.classList.add("buttonclicked");
  } else {
    const button = e.target;
    button.classList.add("buttonclicked");
  }

  let pixel = document.querySelectorAll(".pixel");
  pixel.forEach((pixel) => {
    pixel.remove();
  });

  let slider = document.querySelector(`#slider`);
  let res = slider.value;

  for (let i = 0; i < res * res; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute(
      "style",
      `width: ${512 / res}px; height: ${512 / res}px;`
    );
    pixel.addEventListener("mouseover", func);
    mainholder.appendChild(pixel);
  }
}

let darkenbutton = document.querySelector("#darken");
darkenbutton.addEventListener("click", (e) => resolutionChange(e, darken));
let classicbutton = document.querySelector("#classic");
classicbutton.addEventListener("click", (e) => resolutionChange(e, classic));
let colorsbutton = document.querySelector("#colors");
colorsbutton.addEventListener("click", (e) => resolutionChange(e, colors));

window.onload = (e) => resolutionChange(e, classic);
slider.addEventListener("click", (e) => resolutionChange(e, classic));
