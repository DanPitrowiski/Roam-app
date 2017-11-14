let globalIndex = 0;
let dataID = "";

let removeButton = "<button class='btn remove'>Remove from favorites</button>";
let addButton = "<button class='btn fav'>Add to favorites</button>";

function loadImage(location, htmlLocation, buttonOpt, dataID){

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
        $(htmlLocation).prepend('<div class="image" data-id="'+dataID+'" id="image-'+globalIndex+'"><div class="img-hover"><h2>'+location+'</h2>'+buttonOpt+'</div></div>');
        $('#image-'+globalIndex).css( "background-image", 'url(' + response.data.photos[imageRandom].image_url + ')');
        globalIndex++;

        $('.remove').on('click', function(event){
            let id = $(event.target.parentNode.parentNode).data('id');
            deleteFavorite(id);
        });
        // $('.fav').on('click', function(e){
        //     debugger;
        //     let hideThis = $(this.parentNode.parentNode);
        //     let place = $(this).siblings("h2").text();
        //     addNewFavorite(place);
        //     $(hideThis).hide();
        // });
    });

}