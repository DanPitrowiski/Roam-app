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
	let favorite = location;
	let favoriteReference = firebaseDatabase.ref('favorite_places');
	favoriteReference.push({
		favorite_places: location,
	});
	getFavorites();
}

function getPosts(){
	firebaseDatabase.ref('favorite_places').on('value', function(results){
		let $messageBoard = $('.message-board');
		let places = [];
		let allPlaces = results.val();
		for (let place in allPlaces){
			// $deleteElement.on('click', function(event){
			// 	let id = $(event.target.parentNode).data('id');
			// 	deleteMessage(id);
			// });
			function loadImage(place);
			// let target = ("#image-"+globalIndex).parentNode;
			let $placeListElement = $("#image-"+globalIndex.parentNode));
			$placeListElement.attr('data-id', msg);
		}
	})
}

function updateMessage(id, votes) {
	let messageReference = firebaseDatabase.ref('messages').child(id);
	messageReference.update({
		votes: votes,
	});
}

function deleteMessage(id, votes) {
	let messageReference = firebaseDatabase.ref('messages').child(id);
	messageReference.remove();
}