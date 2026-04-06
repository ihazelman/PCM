// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to save configuration
function saveConfig(config) {
    localStorage.setItem('config', JSON.stringify(config));
}

// Function to apply filters to a table
function applyFilters(tableId, filterValue) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let isVisible = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.includes(filterValue)) {
                isVisible = true;
            }
        }
        rows[i].style.display = isVisible ? '' : 'none';
    }
}

// Function to sort table
function sortTable(tableId, columnIndex, ascending = true) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText;
        const cellB = b.cells[columnIndex].innerText;
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    rows.forEach(row => table.appendChild(row));
}

// Utility functions
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}