/**
 * Created by ruiyun_zhou on 11/21/14.
 */

var Client = require('node-rest-client').Client;
var

// direct way
client = new Client();

/*
 args ={
 path:{"id":120,"arg1":"hello","arg2":"world"},
 parameters:{arg1:"hello",arg2:"world"},
 headers:{"test-header":"client-api"}
 };

 client.get("http://remote.site/rest/json/${id}/method?arg1=${arg1}&arg2=${arg2}", args,
 function(data, response){
 // parsed response body as js object
 console.log(data);
 // raw response
 console.log(response);
 });
 */


module.exports.get = function (url, args, callback) {
    client.get(url, args, function (data, response) {
        console.log(JSON.stringify(data));
        //console.log(response);

        if (typeof callback === 'function') {
            callback(data);
        }

    });
};