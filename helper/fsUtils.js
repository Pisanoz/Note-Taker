const fs = require("fs");
const util = require("util");
const readfromfile = util.promisify(fs.readFile);

const writetoFile = (destination, content) => {
	fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${destination}`)
	);
};
const readAndAppend = (content, file) => {
	fs.readFile(file, "utf-8", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writetoFile(file, parsedData);
		}
	});
};
module.exports = { readfromfile, writetoFile, readAndAppend };
