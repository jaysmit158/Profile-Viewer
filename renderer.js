var fs = require("fs");

function view(templateName, values, response) {
	//Read from the template file
	var fileContent = fs.readFileSync('/views/' + templateName + '.html');
	//Insert values in to the content
	//Write out to the response
	response.write(fileContents);


	
}

module.exports.view = view;