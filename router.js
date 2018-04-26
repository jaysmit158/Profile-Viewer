const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const querystring = require("querystring");

const commonHeaders = { 'Content-Type': 'text/html' };
//2. Handle HTTP route GET / AND POST / i.e. Home
const home = (request, response) => {

  //if url == "/" && GET
  if (request.url === "/") {
    if (request.method.toLowerCase() === "get") {
    //show search
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
       // if url == "/" && POST

       //get the post data from body
       request.on("data",(postBody) => {
        //extract the username
        const query = querystring.parse(postBody.toString());
        //redirect to /:username
        response.writeHead(303,{ "Location": `/${query.username}` });
        response.end();
       });
       
  
    }
  }
 


}

//3. Handle HTTP route GET /:username ie. /chalkers
const user = (request, response) => {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);

    //get json from Treehouse
    var studentProfile = new Profile(username);

    //on "end"
    studentProfile.on("end", (profileJSON) => {
      //show profile

      //Store the values we need
      const values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }
        //Simple Response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    //on "error"
    studentProfile.on("error", (error) => {
      //show error
      renderer.view("error", {errorMessage:error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });


  }
}


module.exports.home = home;
module.exports.user = user;
