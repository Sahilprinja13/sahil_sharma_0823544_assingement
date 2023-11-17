$(document).ready(function(){
    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            populateTable(data);
            updateFilterCounts(data);
        }
    });

    $('#searchBox').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        $('#characterTable tbody tr').each(function() {
            const firstName = $(this).find('td:first').text().toLowerCase();
            if (searchText && firstName.includes(searchText)) {
                $(this).css({'background-color': 'darkgreen', 'color': 'white'});
            } else {
                $(this).css({'background-color': '', 'color': 'black'});
            }
        });
    });
    $(document).ready(function(){

        $('#revert').on('click', function(){
            $('#searchBox').val('');
    
            $('#characterTable tbody tr').each(function() {
                $(this).css({'background-color': '', 'color': 'black'}).show();
            });
        
        });
    
        
    });
    
    $('#filterAM').on('click', function() {
        filterTable('AM');
    });

    $('#filterNZ').on('click', function() {
        filterTable('NZ');
    });
});

function populateTable(data) {
    const tableBody = $('#characterTable tbody');
    tableBody.empty();
    $.each(data, function(i, character) {
        tableBody.append('<tr><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.village + '</td><td>' + character.rank + '</td><td>' + character.age + '</td></tr>');
    });
}
$('#revert').on('click', function () { 
    $('tbody tr').each(function() { 
        $(this).show();             
    })
});
function updateFilterCounts(data) {
    const countAM = data.filter(c => c.lastName[0] >= 'A' && c.lastName[0] <= 'M').length;
const countNZ = data.filter(c => c.lastName[0] >= 'N' && c.lastName[0] <= 'Z').length;
    $('#filterAM').text(`A-M (${countAM})`);
    $('#filterNZ').text(`N-Z (${countNZ})`);
}

function filterTable(range) {
    $('#characterTable tbody tr').each(function() {
        const lastName = $(this).find('td:nth-child(2)').text();
        if ((range === 'AM' && lastName[0] >= 'A' && lastName[0] <= 'M') ||
            (range === 'NZ' && lastName[0] >= 'N' && lastName[0] <= 'Z')) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
