// Initial file for the initial commit

// References to container and gridCell creation

const gridContainer = document.querySelector("#grid-container");
const gridCell = document.createElement("div");

gridCell.setAttribute(
  "style",
  "height: 30px; width: 6.25%; border: 1px solid red;"
);
gridContainer.appendChild(gridCell);
