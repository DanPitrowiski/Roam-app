_500px.init({
	sdk_key: 'f87ac044ab02de593270f5bc8a41c1357af1ec6f'
	});

let discoverList = ["Florence","Amsterdam","Lisbon","Prague","Paris","Venice","Hong Kong","Rio de Janeiro","Bogota","Rome","Chile","Phi Phi","Japan"];

discoverImages = $('.images');
userImages = $('.user-images');

// Loging you into 500px
_500px.getAuthorizationStatus();
_500px.getAuthorizationStatus(function (response) {
     if (response === 'authorized') {
        return;
    }else{
    	$('.login').show();
    }
});

$('#login').on('click', function(){
	_500px.login();
    $('.login').hide();
});

// Loading the Discover List to show examples of locations
discoverList.forEach(function(element) {
	loadImage(element, discoverImages, addButton,"");
});


$( document ).ready(function() {

  	$('#search').focus();

	$('#entry').on('submit', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('#search').blur();
		var place = $( '#search' ).val();
		loadImage(place, discoverImages, addButton,"");
		$('#search').val("");
		$('#search').focus();
		$('#profile').addClass("hide");
		$('#discover').removeClass("hide");
	});

	// From Discover to Profile
	$('.profile').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		getFavorites();
		$('#profile').removeClass("hide");
		$('#discover').addClass("hide");
	});

	// From Profile to Discover
	$('.discover').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('#profile').addClass("hide");
		$('#discover').removeClass("hide");
	});
});

// Forcing the DOM to load before event listening
$(window).bind("load", function() {
    $('.fav').on('click', function(e){
        let hideThis = $(this.parentNode.parentNode);
        let place = $(this).siblings("h2").text();
        addNewFavorite(place);
        $(hideThis).hide();
    });
});
