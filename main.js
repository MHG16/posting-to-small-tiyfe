//write a JavaScript program that will save an item to a collection when the page loads.  




//need an array with the data to be posted
var movies = [{'Star Wars': 1977}, {'Raiders of the Lost Ark': 1981}, {'Guardians of the Galaxy': 2014}]


var settings = $.ajax{

	url: ' http://small-tiyfe.herokuapp.com/collections/martin-grossmann',
	type: movies, 
	datatype: 'jasonp',
	success: handleData,
	error: function(err) {
		console.log(err);
	},

	complete: function() {
		console.log('I got a message');
	}
};




