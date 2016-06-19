$(document).ready(function(){

	// $('.fieldHidden').hide(); 

	$('fieldset').click(function() {
		$(this).find('.fieldHidden').slideToggle('slow'); 
	}); 

});

