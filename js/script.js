// name sahil sharma
// id 0823544

// First Method - Using $.getJSON
function fetchWithGetJSON() {
    $.getJSON('team.json', function(data) {
        // Loop through the array and insert into the div#team
        $.each(data, function(index, member) {
            $('#team').append('<h2>' + member.name + '</h2>');
            $('#team').append('<h5>' + member.position + '</h5>');
            $('#team').append('<p>' + member.bio + '</p>');
        });
    });
}

// Second Method - Using $.ajax
function fetchWithAjax() {
    $('#team').text("Loading...");
    
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').text("Loading...");
        },
        success: function(data) {
            setTimeout(function() { // Delay for 3 seconds for the bonus mark
                $('#team').empty(); // Clear the loading message
                
                // Loop through the array and insert into the div#team
                $.each(data, function(index, member) {
                    $('#team').append('<h2>' + member.name + '</h2>');
                    $('#team').append('<h5>' + member.position + '</h5>');
                    $('#team').append('<p>' + member.bio + '</p>');
                });
            }, 3000);
        },
        error: function() {
            $('#team').text("The content could not be retrieved.");
        }
    });
}

// jQuery ready function
$(document).ready(function() {
    
    fetchWithAjax();
});
