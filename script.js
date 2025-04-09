document.addEventListener("DOMContentLoaded", () => {
  console.log("Premier League Hub Loaded!");

  const table = document.querySelector(".points-table");
  const headers = table.querySelectorAll("th");
  const tbody = table.querySelector("tbody");
  let sortDirection = 1; // ascending by default

  headers.forEach((header, index) => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      sortTableByColumn(index);
    });
  });

  function sortTableByColumn(colIndex) {
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
      const valA = a.children[colIndex].innerText.replace(/[^\d-]/g, '');
      const valB = b.children[colIndex].innerText.replace(/[^\d-]/g, '');

      return sortDirection * (parseInt(valA) - parseInt(valB));
    });

    // Flip direction for next click
    sortDirection *= -1;

    // Clear and re-add rows
    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));

    highlightTopBottomTeams();
  }

  function highlightTopBottomTeams() {
    const rows = tbody.querySelectorAll("tr");
    rows.forEach(row => row.style.backgroundColor = "");

    if (rows.length > 0) {
      rows[0].style.backgroundColor = "#e0ffe0"; // top = green
      rows[rows.length - 1].style.backgroundColor = "#ffe0e0"; // bottom = red
    }
  }

  // Optional animation on load
  const rows = tbody.querySelectorAll("tr");
  rows.forEach((row, i) => {
    row.style.opacity = 0;
    setTimeout(() => {
      row.style.transition = "opacity 0.4s ease-in";
      row.style.opacity = 1;
    }, i * 100);
  });

  highlightTopBottomTeams();
});

