//write a JavaScript program that will save an item to a collection when the page loads.  


var handleData = function(data) {





}





var settings {

	url: ' http://small-tiyfe.herokuapp.com/collections/martin-grossmann',
	type: 'post',
	datatype: 'jasonp',
	success: handleData,
	error: function(err) {
		console.log(err);
	},

	complete: function() {
		console.log('I got a message');
	}
};

$.ajax(settings);


