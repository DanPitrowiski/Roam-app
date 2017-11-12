let globalIndex = 0;

$(function() {

	_500px.init({
	sdk_key: 'f87ac044ab02de593270f5bc8a41c1357af1ec6f'
	});

    _500px.getAuthorizationStatus();
    _500px.getAuthorizationStatus(function (response) {
         if (response === 'authorized') {
            // $('.load-image').show();
            $('.load-image').show();
        }
        else { $('.login').show();}
    });

	$('#login').on('click', function(){
		_500px.login();
        $('.login').hide();
        $('.load-image').show();
	});
})

function loadImage(location){
    let searchOptions = {
        term: location,
        only: 'Landscapes',
        rpp: 10,
        image_size: 1600,
        sort: 'highest_rating',
    };

    _500px.api('/photos/search', searchOptions, function (response) {
        let imageRandom = Math.floor((Math.random() * 10));
        console.log(response);
        $('.images').prepend('<div class="wrapper image" id="image-'+globalIndex+'"><div class="img-hover hide"><h2>'+location+'</h2></div></div>');
        $('#image-'+globalIndex).css( "background-image", 'url(' + response.data.photos[imageRandom].image_url + ')');
    });
}