function darken(e) {
  this.classList.add("pixelhoverblack");
  // this.style.backgroundColor = `rgb(${}, ${}, ${})`;
  console.log(this.style.opacity);
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
