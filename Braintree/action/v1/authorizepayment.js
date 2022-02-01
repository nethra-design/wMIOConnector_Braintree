module.exports = {

  name: "authorizepayment",

  title: "Authorizepayment",

  description: "",
  version: "v1",

  input:{
    title: "Authorizepayment",
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

  execute: function (input, output) {

    // return output(null,input)

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://payments.sandbox.braintree-api.com/graphql',
      'headers': {
        'Authorization': 'Basic ' + input.auth.api_key,
        'Content-Type': 'application/json',
        'Braintree-Version': '2019-01-01'
      },
      body: input.body
    };
    request(options, function (error, response, body) {
      if (typeof body == "string") {
        body = JSON.parse(body)
      }
      if (error) {
        return output(error)
      } else {
        if (response.statusCode == 200) {
          return output(null, body)
        } else {
          return output(body)
        }
      }
    });



  }

}
