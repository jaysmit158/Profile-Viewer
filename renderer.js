var fs = require("fs");

function view(templateName, values, response) {
	//Read from the template file
	fs.readFile('/views/', function(err,data){
		if (err) throw err;

	//Insert values in to the content
	//Write out to the response
	console.log(data);
	});


	
}