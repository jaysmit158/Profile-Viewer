//Problem: We need a simple way to look at a user's badge count and Javascript point from a web browser

//Solution: Use nodejs to perform the profile look ups and serve our template via HTTP.


//1. Create a web server
var http = require('http');

http.createServer((request, response) => {
  homeRoute(request,response);
    
}).listen(8080);
console.log('http server has connected.');

//2. Handle HTTP route GET / AND POST / i.e. Home
  function homeRoute(request, response) {

    //if url == "/" && GET
    if (request.url === "/") {
          //show search
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
    // if url == "/" && POST
      //redirect to /:username


  }

//3. Handle HTTP route GET /:username ie. /chalkers
  function userRoute(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
      }
  }

//4. Function that handles the reading of files and merge in value
    //read from file and get string
      //merge values in to string