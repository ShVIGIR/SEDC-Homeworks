//DYNAMIC TABLE

let tableContainer = document.getElementById('table-container');
let button = document.getElementById('kopce');

function createTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;

    let table = '<table border = "1">';
    for (let i = 1; i <= rows; i++) {
        table += '<tr>';
        for (let j = 1; j <= columns; j++) {
            table += '<td>' + 'Row- ' + i + 'Column- ' + j + '</td>';
        }
        table += '</tr>'
    }
    table += '</table';
    tableContainer.innerHTML += table;
    document.getElementById('rows').value = " ";
    document.getElementById('columns').value = " ";
}


button.addEventListener('click', createTable);


