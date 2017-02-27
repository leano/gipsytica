var request = require('request');

var handler = function (event, context, callback) {

	var get_history_url = 'https://habitica.com/export/history.csv'

	var options = {
	  url: get_history_url,
	  headers: {
	    'x-api-user': '',
			'x-api-key': ''
	  }
	};

	request(options, function (error, response, body) {
		console.log(error);
		console.log(body);
		console.log(response.statusCode)

		callback(null, body)
	});

}

exports.myHandler = handler;
