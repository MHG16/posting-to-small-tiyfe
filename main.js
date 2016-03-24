//write a JavaScript program that will save an item to a collection when the page loads.  


//need an array with the data to be posted
var movies = [{title: 'Star Wars'}, {title: 'Raiders of the Lost Ark'}, {title:'Guardians of the Galaxy'}];

//use post
//unsure why settings needs to be inside ()

movies.forEach(function(movie) {


	var settings = $.ajax ({

		url: 'http://small-tiyfe.herokuapp.com/collections/martin-grossmann',
		type: 'post',
		data: movie, 
		datatype: 'json',
	 
		success: function(data) {
	     	console.log(movies);
	 	},

		error: function(err) {
			console.log(err);
		},

		complete: function() {
			console.log('I got a message');
		}
	})

});


