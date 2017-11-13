let globalIndex = 0;

let searchOptions = {
    term: location,
    only: 'Landscapes',
    rpp: 10,
    image_size: 1600,
    sort: 'highest_rating',
};

function loadImage(location, htmlLocation){
    _500px.api('/photos/search', searchOptions, function (response) {
        let imageRandom = Math.floor((Math.random() * 10));
        console.log(response);
        $(htmlLocation).prepend('<div class="wrapper image" id="image-'+globalIndex+'"><div class="img-hover"><h2>'+location+'</h2><button class="btn fav">Add to Favorite</button></div></div>');
        $('#image-'+globalIndex).css( "background-image", 'url(' + response.data.photos[imageRandom].image_url + ')');
    });
}

// function loadSaved(location, htmlLocation){
//     _500px.api('/photos/search', searchOptions, function (response) {
//         let imageRandom = Math.floor((Math.random() * 10));
//         $(htmlLocation).prepend('<div class="wrapper image" id="image-'+globalIndex+'"><div class="img-hover"><h2>'+location+'</h2><button class="btn fav">Add to Favorite</button></div></div>');
//         $('#image-'+globalIndex).css( "background-image", 'url(' + response.data.photos[imageRandom].image_url + ')');
//     });
// }