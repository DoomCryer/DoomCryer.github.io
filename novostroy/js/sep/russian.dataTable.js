$(document).ready(function () {
	$.getJSON( "<?php echo SITE_URL; ?>js/sep/locality/tableLangs/Russian.json", function( json ) {
		$("#students").dataTable({
			"oLanguage": json
		});
	});
});