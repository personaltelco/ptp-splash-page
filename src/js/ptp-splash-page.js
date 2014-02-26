
$(document).ready(function() {
    
    // donors can opt out of public acknowledgement
    // by clicking on the checkbox in the donors section
    // we manipulate some variables which are eventually
    // consumed by the donor polling tools that back
    // http://api.personaltelco.net/api/v0/donors
	$('#optoutpublic').click(function() {
		if ($('#optoutpublic').is(':checked')) {
			$('#item_number').val('splash2014_opt_out');
			$('#item_name').val('Personal Telco Project - Anonymous Donation');
		} else {
		    $('#item_number').val('splash2014');
		    $('#item_name').val('Personal Telco Project - Donation');
		}
	});

	// a bootstrap feature which needs resetting after any manipulation of the DOM
	smoothScrolling();
	

});

function smoothScrolling() {
	$("a[href^='#']").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;
		var further = 0;
		if (hash == '#home' || hash == '#Carousel') {
			further = 50;
		}
		// animate
		$('html, body').animate({
			scrollTop : $(this.hash).offset().top - further
		}, 1250, function() {
			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
		});

	});
}

