function darken(e) {
  let pixelstyles = window.getComputedStyle(this);
  let opacity = parseFloat(pixelstyles.getPropertyValue("opacity"));
  this.style.setProperty("opacity", `${opacity - 0.1}`);
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
    pixel.addEventListener("mouseover", darken);
    mainholder.appendChild(pixel);
  }
}

window.onload = resolutionChange;
slider.addEventListener("click", resolutionChange);
