$(document).ready(function() {
    var originalRows;
    var sortingState = { column: null, order: 'original' };

    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            populateTable(data);
            updateFilterCounts(data);
            originalRows = $('#characterTable tbody tr ').clone(true,true); // Store the original rows
        }
    });
    
    $('#searchBox').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        $('#characterTable tbody tr').each(function() {
            const firstName = $(this).find('td:first').text().toLowerCase();
            $(this).toggle(firstName.includes(searchText));
        });
    });

    
    $('#revert').on('click', function() {
        $('#searchBox').val('');
        $('#characterTable tbody tr').show();
    });

    $('#filterAM').on('click', function() { filterTable('AM'); });
    $('#filterNZ').on('click', function() { filterTable('NZ'); });

    $(document).on('click', '#characterTable thead th a', function(e) {
        e.preventDefault();
        const columnIndex = $(this).parent().index();
        sortTable(columnIndex);
    });
});

function populateTable(data) {
    const tableHead = $('#characterTable thead');
    tableHead.empty();
    const headings = ['First Name', 'Last Name', 'Village', 'Rank', 'Age', 'Date'];
    let theadHTML = '<tr>';
    headings.forEach(h => {
        theadHTML += `<th><a href="#" style="color: blue;">${h} <span class="chevron"></span></a></th>`;
    });
    theadHTML += '</tr>';
    tableHead.append(theadHTML);
    const tableBody = $('#characterTable tbody');
    tableBody.empty();
    $.each(data, function(i, character) {
        tableBody.append(`<tr><td>${character.firstName}</td><td>${character.lastName}</td><td>${character.village}</td><td>${character.rank}</td><td>${character.age}</td><td>${character.date}</td></tr>`);
    });
}

function updateFilterCounts(data) {
    const countAM = data.filter(c => c.lastName[0] >= 'A' && c.lastName[0] <= 'M').length;
    const countNZ = data.filter(c => c.lastName[0] >= 'N' && c.lastName[0] <= 'Z').length;
    $('#filterAM').text(`A-M (${countAM})`);
    $('#filterNZ').text(`N-Z (${countNZ})`);
}

function filterTable(range) {
    $('#characterTable tbody tr').each(function() {
        const lastName = $(this).find('td:nth-child(2)').text();
        $(this).toggle((range === 'AM' && lastName[0] >= 'A' && lastName[0] <= 'M') || (range === 'NZ' && lastName[0] >= 'N' && lastName[0] <= 'Z'));
    });
}

const sortingState = { column: null, order: null };
var originalRows = [];

function sortTable(columnIndex) {
    let rows = $('#characterTable tbody tr').toArray();
    let sortedRows;

    if (sortingState.column === columnIndex) {
        if (sortingState.order === 'asc') {
            sortingState.order = 'desc';
        } else if (sortingState.order === 'desc') {
            sortingState.order = 'original';
            columnIndex++;
        } else {
            sortingState.order = 'asc';
            
        }
    } else {
        sortingState.column = columnIndex;
        sortingState.order = 'asc';
    }

    if (sortingState.order === 'original') {
        $('#characterTable tbody').append(updateChevrons);
    } else {
        sortedRows = rows.sort(function(a, b) {
            const valA = $(a).find('td').eq(columnIndex).text();
            const valB = $(b).find('td').eq(columnIndex).text();
            return sortingState.order === 'asc' ? valA.localeCompare(valB, undefined, {numeric: true}) : valB.localeCompare(valA, undefined, {numeric: true});
        });

        $('#characterTable tbody').empty().append(sortedRows);
    }

    updateChevrons();
    console.log(columnIndex)
}

function updateChevrons() {
    $('#characterTable thead th .chevron').each(function(index) {
        if (index === sortingState.column) {
            if (sortingState.order === 'asc') {
                $(this).html('&#x25B2;');
            } else if (sortingState.order === 'desc') {
                $(this).html('&#x25BC;');
            } else {
                $(this).find();
            }
        } else {
            $(this).find();
        }
    });
}