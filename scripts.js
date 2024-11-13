document.addEventListener("DOMContentLoaded", () => {
  // Select all <td> elements with the "selectable" class
  const selectableCells = document.querySelectorAll("td.selectable");

  selectableCells.forEach(cell => {
    cell.addEventListener("click", () => {
      // Get the parent <tr> of the clicked <td>
      const row = cell.parentElement;
      
      // Check if the clicked cell is currently selected
      const wasCellSelected = cell.classList.contains("selected");

      // Deselect all selectable cells in the row
      row.querySelectorAll("td.selectable").forEach(cellInRow => {
        cellInRow.classList.remove("selected");
      });

      // If the cell wasn't previously selected, select it now
      if (!wasCellSelected) {
        cell.classList.add("selected");
      }
    });
  });

  const saveToPdfButton = document.getElementById("to-pdf");
  saveToPdfButton.addEventListener("click", () => {
    const target = document.getElementById('rubric-container');
    html2pdf(target);
  })
});
