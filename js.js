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

function resolutionChange(e) {
  //Clears last pixel count
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
    pixel.addEventListener("mouseover", classic);
    mainholder.appendChild(pixel);
  }
}

window.onload = resolutionChange;
slider.addEventListener("click", resolutionChange);
