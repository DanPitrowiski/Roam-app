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

// Add a new favorite location
function addNewFavorite(place){
	let favoriteReference = firebaseDatabase.ref('favorite_places');
	favoriteReference.push({
		favorite_places: place,
	});
}

// Load locations in your profile
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
}

// From the Profile, delete locations
function deleteFavorite(id) {
	let favoriteReference = firebaseDatabase.ref('favorite_places').child(id);
	favoriteReference.remove();
}