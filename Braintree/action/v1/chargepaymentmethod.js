module.exports = {

  name: "chargepaymentmethod",

  title: "Chargepaymentmethod",

  description: "",
  version: "v1",

  input:{
    title: "Chargepaymentmethod",
    type: "object",
    properties: {
      body: {
        "title": "body",
        "type": "string",
        "format":"textarea"
      }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    // your code here var x="https://payments.sandbox.braintree-api.com/graphql";
    var request = require("request");
    var options = {
      "method": "POST",
      "url": "https://payments.sandbox.braintree-api.com/graphql",
      "headers": {
          "Authorization": "Basic " + input.auth.api_key,
		  "Accept": "application/json",
		  "Content-Type": "application/json",
		  "Braintree-Version": "2019-01-01"
        },
     
      "body" : input.body
      };
	 request(options, function (error, response, body) {
	 try {
            if (body && typeof(body) === "string") {
                body = JSON.parse(body);
            }
        } catch (e) {
            return output(body);
        };
		
		  if (response.statusCode === 403) {
            return output("the authentication information is incorrect.");
        }
		 if (response.statusCode === 400) {
            return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            return   output(null, body);
        }
        output(body);
		
});

  }
}
