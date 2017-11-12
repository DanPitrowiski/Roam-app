$( document ).ready(function() {
  	$('#search').focus();
 });

$('#entry').on('submit', function(e){
	$('#search').blur();
	var location = $( '#search' ).val();
	e.preventDefault();
	e.stopImmediatePropagation();
	loadImage(location);
	$( '#search' ).val("");
	$('#search').focus();
});
