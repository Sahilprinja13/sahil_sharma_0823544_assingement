$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
    });
});
$(document).ready(function () {
    console.log("Modal script is ready.");
    var modalHtml = `
        <div class="modal" id="imageModal">
        <img src="" alt="Image" width="800" height="450">
        <button id="closeModalBtn">Close</button>
        </div>
    `;
    $('body').append(modalHtml);
    console.log("Modal HTML is injected.");
    var modal = $("#imageModal");
    var modalImage = modal.find("img");
    $("a.photo-box").on("click", function () {
        var photoBox1 = document.querySelector('img.active');
        var src = photoBox1.src;
        console.log(photoBox1);
        console.log(src)
        modalImage.attr("src", src);
        modalImage.addClass("vertical-center");
        modal.show();
        console.log("Modal opened.");
    });

    $("#closeModalBtn").on("click", function () {
        modal.hide();
        console.log("Modal closed.");
    });
    $(document).on("click", function (event) {
        if (event.target === modal[0]) {
            modal.hide();
            console.log("Modal closed by clicking outside.");
        }
    });
});
