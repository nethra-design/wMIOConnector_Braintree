module.exports = {
	label: "Connect to Braintree",
	mock_input: {
		api_key: "OXYyOGg1cHR3dnFidjh3dDo4YmRlYzBkNzg2YTM1YTIwZTNlNWI0YmVmZGUwNzAzNA=="
	},
	validate: function (input, output) {
		// validate function will used for validating user input while adding connection for this connector
		// credential will be available in input.auth object
		// var apikey = input.auth.api_key;
		// callback pattern
		// output(error, success)
		output(null, true);
	}
}