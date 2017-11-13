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

function addNewFavorite(location){
	let favoriteReference = firebaseDatabase.ref('favorite_places');
	favoriteReference.push({
		favorite_places: location,
	});
	// getFavorites();
}

function getFavorites(){
	firebaseDatabase.ref('favorite_places').on('value', function(results){
		let locations = [];
		let allLocations = results.val();
		for (let locations in allLocations){
			function loadImage(place, userImages);
			let $('#image-'+globalIndex).attr('data-id', msg);
			$deleteFavorite.on('click', function(event){
				let id = $(event.target.parentNode).data('id');
				deleteFavorite(id);
			})
		}
	})
}

// function addFavorite(id) {
// 	let favoriteReference = firebaseDatabase.ref('messages').child(id);
// 	messageReference.add({
// 	});
// }

function deleteFavorite(id) {
	let favoriteReference = firebaseDatabase.ref('messages').child(id);
	favoriteReference.remove();
}