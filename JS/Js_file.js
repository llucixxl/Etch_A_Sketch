// Initial file for the initial commit

// References to container for gridCell creation

const wrapGridContainers = document.querySelector("#wrap-grid-containers");

// Generate grid cells

let gridCellsCount = 100 / 4;
let newGridCount = 100 / `${gridCellsCount}`;

for (let i = 0; i < newGridCount; i++) {
  const cellBoardContainer = document.createElement("div");
  cellBoardContainer.setAttribute("id", "#wrap-grid-cell");
  cellBoardContainer.setAttribute(
    "style",
    "display: flex; flex-wrap: wrap; flex-grow: 1;"
  );

  for (let j = 0; j < newGridCount; j++) {
    const gridCell = document.createElement("div");
    gridCell.setAttribute("id", "#grid-cell");
    gridCell.setAttribute("style", "border: 1px solid black;  flex-grow: 1;");
    cellBoardContainer.appendChild(gridCell);
  }
  wrapGridContainers.appendChild(cellBoardContainer);
}

// End of generate grid cells

// End of the auto-generate grid board function
