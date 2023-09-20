/*
	WEB 303 Assignment 1 - jQuery
	{sahil sharma}
*/

$(document).ready(function() {
    
    $("#yearly-salary, #percent").on("keyup", function() {
        
        let salary = parseFloat($("#yearly-salary").val()); 
        let percent = parseFloat($("#percent").val()); 

        let amount = (salary * percent / 100).toFixed(2);
		$("#amount").text("$" + amount);
    });
});

