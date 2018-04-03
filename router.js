var Profile = require("./profile.js");


var studentProfile = new Profile("chalkers");
//2. Handle HTTP route GET / AND POST / i.e. Home
  function home(request, response) {

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
  function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

    //get json from Treehouse
    var studentProfile = new Profile("chalkers");

    //on "end"
    studentProfile.on("end",);
        //show profile
    //on "error"
    studentProfile.on("error",);
        //show error
    response.write(username + "\n");
    response.end("Footer\n");
    
      
      }
  }


  module.exports.home = home;
  module.exports.user = user;