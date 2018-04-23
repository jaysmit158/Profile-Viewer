var fs = require("fs");

const mergeValues = (values, content) => {
	//Cyle over the keys
	for (var key in values) {
	//Replace all {{keys}} with the value from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}
	//return merged content
	return content;
}

const view = (templateName, values, response) => {
	//Read from the template file
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding:'utf8'});
	//Insert values in to the content
	fileContents = mergeValues(values, fileContents);
	//Write out to the response
	response.write(fileContents);
	
}

module.exports.view = view;