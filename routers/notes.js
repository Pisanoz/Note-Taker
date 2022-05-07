const notes = require("express").Router();
const {
	readfromfile,
	writetoFile,
	readAndAppend,
} = require("../helper/fsUtils");

// /api/notes
notes.get("/", (req, res) => {
	readfromfile("./db/db.json", "utf-8").then((data) => {
		console.log(data);
		res.json(JSON.parse(data));
	});
});
notes.post("/", (req, res) => {
	const { title, text, noteid } = req.body;
	if (req.body) {
		const newNote = {
			title,
			text,
			noteid,
		};
		readAndAppend(newNote, "./db/db.json");
		res.json(`Note added`);
	} else {
		res.error("Error adding new note");
	}
});
module.exports = notes;
