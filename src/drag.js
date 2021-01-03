function allowDrop(event) {
  // allow cancelling the drop
  event.preventDefault();
}

function drag(event) {
  // set id for the dragged element
  event.dataTransfer.setData("id", event.target.id);
}

function drop(event) {
  // allow cancelling the drop
  event.preventDefault();
  // get id of the dragged element
  const id = event.dataTransfer.getData("id");
  // get the element with the id
  const draggedElement = document.getElementById(id);
  // append the dragged element to the drop target
  event.target.appendChild(draggedElement);
}

const a1 = document.getElementById("a1");
a1.addEventListener("drop", (event) => drop(event));
a1.addEventListener("dragover", (event) => allowDrop(event));

const a2 = document.getElementById("a2");
a2.addEventListener("drop", (event) => drop(event));
a2.addEventListener("dragover", (event) => allowDrop(event));

const piece = document.getElementById("piece");
piece.addEventListener("dragstart", (event) => drag(event));
