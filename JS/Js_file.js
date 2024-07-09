// Initial file for the initial commit

// References to container and gridCell creation

const gridContainer = document.querySelectorAll("#grid-container");
const arrayOfGridContainers = Array.from(gridContainer);
const gridCell = document.createElement("div");

gridCell.setAttribute(
  "style",
  "height: 30px; width: 6.25%; border: 1px solid red;"
);

// Function to auto-generate the grid board
let gridNumber = 16;

(function () {
  for (let i = 0; i < gridNumber; ++i) {
    arrayOfGridContainers.forEach((container) => {
      container.appendChild(gridCell.cloneNode(true));
    });
  }
})();

// End of the auto-generate grid board function
