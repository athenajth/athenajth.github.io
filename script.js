$(document).ready(function(){

	$('.fieldHidden').hide(); 

	$(".clickMe").click(function() {
		$(this).find('.fieldHidden').slideToggle('slow'); 
	}); 

});

