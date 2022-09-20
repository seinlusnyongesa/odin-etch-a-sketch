const gridConatiner = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
const sizeContainer = document.querySelector(".size-content");

const defaultSize = 16;

slider.addEventListener("input", function () {
  sizeContainer.innerHTML = `${this.value} x ${this.value} grid`;
  clearGrid();
  formGrid(this.value);
});

function clearGrid() {
  gridConatiner.innerHTML = "";
}

function formGrid(size) {
  gridConatiner.setAttribute(
    "style",
    ` grid-template-columns: repeat(${size},1fr);
    grid-template-rows: repeat(${size},1fr);`
  );

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.setAttribute(
      "style",
      "width:100%; height:100%; border:0.5px solid #575656;"
    );
    grid.addEventListener("mouseover", (e) => {
      const color = genRandomColor();
      e.target.setAttribute("style", `background-color:${color}`);
    });
    gridConatiner.appendChild(grid);
  }
}

function randomNumberFrom0to255() {
  return Math.floor(Math.random() * 255);
}

function genRandomColor() {
  return `rgb(${randomNumberFrom0to255()},${randomNumberFrom0to255()},${randomNumberFrom0to255()})`;
}

window.onload = () => {
  formGrid(defaultSize);
  sizeContainer.innerHTML = `${defaultSize} x ${defaultSize} grid`;
};
