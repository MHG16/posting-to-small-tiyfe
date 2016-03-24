//write a JavaScript program that will save an item to a collection when the page loads.  


//need an array with the data to be posted
var movies = [{title: 'Star Wars'}, {title: 'Raiders of the Lost Ark'}, {title:'Guardians of the Galaxy'}];

//use post
//unsure why settings needs to be inside ()

movies.forEach(function(array) {


	var settings = $.ajax ({

		url: 'http://small-tiyfe.herokuapp.com/collections/martin-grossmann',
		type: 'post',
		//not sure why this is {movies: movies}
		data: {movies}, 
		datatype: 'jasonp',
		//not sure what success does here other than call a function passing in the array.  
		success: (function(array) {
	     $('.answer').html();
	 	}),

		error: function(err) {
			console.log(err);
		},

		complete: function() {
			console.log('I got a message');
		}
})

});


