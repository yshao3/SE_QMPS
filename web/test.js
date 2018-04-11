// // Access-Control-Allow-Origin:*
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }

// var xhr = createCORSRequest('GET',"http://localhost:8080/Alltables" );
// if (!xhr) {
//   throw new Error('CORS not supported');
// }
// xhr.onload = function() {
//  var responseText = xhr.responseText;
//  console.log(responseText);
//  // process the response.
// };
// xhr.withCredentials = true;
// // Access-Control-Allow-Credentials: true;
// xhr.send();
// xhr.onerror = function() {
//   console.log('There was an error!');
// };
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/web/teat/2018-08-17"
    }).then(function(data, status, jqxhr) {
       // $('.greeting-id').append(jqxhr.responseText);
       // $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/Login/root/1234"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(jqxhr.responseText);
       console.log(jqxhr);
    });
});
// var x = new XMLHttpRequest();
// x.open("GET", "http://localhost:8080/Alltables");
// x.responseType = 'text';

// x.onload = function() {
//   poemDisplay.textContent = x.response;
// };

// x.send();

    
// var request = require('request');
// request('http://localhost:8080/Alltables',  function(err, res, body) {
//     console.log(err, res, body)
// });