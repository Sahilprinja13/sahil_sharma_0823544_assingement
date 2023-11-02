// name sahil sharma
// class 0823544
$(document).ready(function(){
    
    $('.accordion h3').click(function(){
        var $accordion = $(this).closest('.accordion');
        $accordion.find('.panel').slideUp();
        if(!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });

    
    $('.tab-links a').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        
        $('.tabs ' + currentAttrValue).slideDown().siblings().slideUp();

        
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});
