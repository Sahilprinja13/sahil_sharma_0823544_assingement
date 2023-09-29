// name sahil sharma
// student id 0823544
// assinement 2

$(document).ready(function() {
    $('#content-wrapper a').on('click', function(event) {
        event.preventDefault();

        let targetId;
        if ($(this).attr('id') === 'prospect') {
            targetId = 'prospect.html';
        } else if ($(this).attr('id') === 'convert') {
            targetId = 'convert.html';
        } else {
            targetId = 'retain.html';
        }

        $('#content').fadeOut(400, function() {
            $('#content').html('');
            let xhr = new XMLHttpRequest();
            xhr.open('GET', targetId, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {

                    $('#content').html(xhr.responseText);

                    
                    $('#content').slideToggle(400);
                }
            };
            xhr.send();
        });
    });
});
