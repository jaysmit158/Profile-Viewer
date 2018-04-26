
const router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and Javascript point from a web browser
//Solution: Use nodejs to perform the profile look ups and serve our template via HTTP.


//1. Create a web server
const http = require('http');

http.createServer((request, response) => {
  router.home(request,response);
  router.user(request,response);
    
}).listen(8080);
console.log('http server has connected.');



