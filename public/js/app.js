let discoverList = ["Rio de Janeiro","Bogota","Rome","Chile","Phi Phi","Japan"];

discoverImages = $('.images');
userImages = $('.user-images');


$( document ).ready(function() {

	_500px.init({
	sdk_key: 'f87ac044ab02de593270f5bc8a41c1357af1ec6f'
	});

    _500px.getAuthorizationStatus();
    _500px.getAuthorizationStatus(function (response) {
         if (response === 'authorized') {
            $('.load-image').show();
        }
        else { $('.login').show();}
    });

	$('#login').on('click', function(){
		_500px.login();
        $('.login').hide();
        $('.load-image').show();
	});

  	$('#search').focus();

	discoverList.forEach(function(element) {
	    loadImage(element, discoverImages);
	});
});

$('#entry').on('submit', function(e){
	$('#search').blur();
	var location = $( '#search' ).val();
	e.preventDefault();
	e.stopImmediatePropagation();
	loadImage(location, discoverImages);
	$( '#search' ).val("");
	$('#search').focus();
	$('#profile').addClass("hide");
	$('#discover').removeClass("hide");
});

$('.fav').on('click', function(e){
	let removeCheck = $( ".fav" ).hasClass( "remove" );
	let location = $(this).siblings("h2").text();
	if (removeCheck === false){
			$(this).html("Remove from favorites");
			$(this).addClass('remove');
			addNewFavorite(location);
	} else{
			$(this).html("Add to Favorites");
			$(this).removeClass('remove');
			let id = $(event.target.parentNode.parentNode).data('id');
			deleteFavorite(id);
	}
});

$('.profile').on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation();
	$('#profile').removeClass("hide");
	$('#discover').addClass("hide");
});

$('.discover').on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation();
	$('#profile').addClass("hide");
	$('#discover').removeClass("hide");
});