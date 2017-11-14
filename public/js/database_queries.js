addRemoveClass = "remove";

var config = {
	apiKey: "AIzaSyBZROBBmYcZZ9OZyIB-PHZWv0YC3fN1qy0",
	authDomain: "roam-worldwide-app.firebaseapp.com",
	databaseURL: "https://roam-worldwide-app.firebaseio.com",
	projectId: "roam-worldwide-app",
	storageBucket: "",
	messagingSenderId: "605133544638"
};
firebase.initializeApp(config);

let firebaseDatabase = firebase.database();

function addNewFavorite(place){
	let favoriteReference = firebaseDatabase.ref('favorite_places');
	favoriteReference.push({
		favorite_places: place,
	});
}

function getFavorites(){
	debugger;
	firebaseDatabase.ref('favorite_places').on('value', function(results){
		let locations = [];
		let allLocations = results.val();
		$('.user-images').empty();
		for (let locations in allLocations){
			let place = allLocations[locations].favorite_places;
			loadImage(place, userImages, removeButton, locations);
			console.log("Locations:", locations);
		}
	})
	// let $removeButton = $('.remove');
	// $removeButton.on('click', function(event){
	//     let id = $(event.target.parentNode.parentNode).data('id');
	//     deleteFavorite(id);
	// });
	// let $favButton = $('.fav');
	// $favButton.on('click', function(e){
	//     debugger;
	//     let hideThis = $(this.parentNode.parentNode);
	//     let place = $(this).siblings("h2").text();
	//     addNewFavorite(place);
	//     $(hideThis).hide();
	// });
}


function deleteFavorite(id) {
	let favoriteReference = firebaseDatabase.ref('favorite_places').child(id).once(value);
	favoriteReference.remove();
}