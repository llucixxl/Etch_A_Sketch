// Initial file for the initial commit

// References to container for gridCell creation

const wrapGridContainers = document.querySelector("#wrap-grid-containers");

// Generate grid cells

let gridCellsCount = 256;

for (let i = 0; i < gridCellsCount; i++) {
  const wrapGridContainers = document.querySelector("#wrap-grid-containers");
  const gridCell = document.createElement("div");

  gridCell.setAttribute("id", "grid-cell");
  gridCell.setAttribute(
    "style",
    "height: 30px; width: 6.25%; border: 1px solid black;"
  );
  wrapGridContainers.appendChild(gridCell);
}

// End of generate grid cells

// End of the auto-generate grid board function
