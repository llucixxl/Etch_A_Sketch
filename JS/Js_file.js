// Initial file for the initial commit

// References to container for gridCell creation

const wrapGridContainers = document.querySelector("#wrap-grid-containers");

// Generate initial grid cells panel

let boardCells = 16;
let templateSize = 480;
let gridCellSize = templateSize / boardCells;

function generateGrid(boardCells) {
  wrapGridContainers.innerHTML = "";
  gridCellSize = templateSize / boardCells;

  for (let i = 0; i < boardCells; i++) {
    const cellBoardRow = document.createElement("div");
    cellBoardRow.setAttribute("style", "display: flex;");
    cellBoardRow.style.height = `${gridCellSize}px`;

    for (let j = 0; j < boardCells; j++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.style.width = `${gridCellSize}px`;
      cellBoardRow.appendChild(gridCell);
    }

    wrapGridContainers.appendChild(cellBoardRow);
  }
}

generateGrid(boardCells);

// End of generating initial grid cells panel

// Add number of grid cells by user prompt input

function createGrid() {
  let gridCellsCount;
  do {
    gridCellsCount = prompt("The number of cells must be between 1 and 100!");

    if (gridCellsCount === null) {
      break;
    }

    gridCellsCount = +gridCellsCount;
  } while (gridCellsCount < 1 || gridCellsCount > 100 || isNaN(gridCellsCount));
  return gridCellsCount;
}
// End of add number of grid cells by user prompt input

// Update the new grid with user input number of cells

function updateGrid() {
  const newBoardCells = createGrid();

  if (newBoardCells !== null) {
    boardCells = newBoardCells;
    generateGrid(boardCells);
  }
}

// End of update the new grid with user input number of cells

// Add hover effect for the grid cells

wrapGridContainers.addEventListener("mouseover", (event) => {
  let cellColor = event.target.closest(".grid-cell");
  if (cellColor) {
    cellColor.style.backgroundColor = "blue";
  }
});

//  End of add hover effect for the grid cells
