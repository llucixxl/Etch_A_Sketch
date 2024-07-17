// Initial file for the initial commit

// References to container for gridCell creation

const wrapGridContainers = document.querySelector("#wrap-grid-containers");

// Generate grid cells

let gridCellsCount = 16;
let templateSize = 480;
let gridCellSize = templateSize / gridCellsCount;

for (let i = 0; i < gridCellsCount; i++) {
  const cellBoardRow = document.createElement("div");
  cellBoardRow.setAttribute("style", "display: flex;");
  cellBoardRow.style.height = `${gridCellSize}px`;

  for (let j = 0; j < gridCellsCount; j++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridCell.style.width = `${gridCellSize}px`;
    cellBoardRow.appendChild(gridCell);
  }

  wrapGridContainers.appendChild(cellBoardRow);
}

// End of generate grid cells

// Add hover effect for the grid cells

wrapGridContainers.addEventListener("mouseover", (event) => {
  let cellColor = event.target.closest(".grid-cell");
  if (cellColor) {
    cellColor.style.backgroundColor = "blue";
  }
});
