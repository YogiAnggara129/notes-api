import express, { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import mongoose from "./db/mongoose";
import Note, { INote } from "./models/note";

mongoose;
const app = express();
app.use(express.json());

// create
app.post("/notes", async (req, res) => {
	const note = new Note(req.body);
	try {
		await note.save();
		res.status(201).send(note);
	} catch (error) {
		res.status(400).send(error);
	}
});

// read
app.get("/notes", async (req, res) => {
	try {
		const notes = await Note.find({});
		res.send(notes);
	} catch (error) {
		res.status(500).send(error);
	}
});

// update
app.patch("/notes/:id", async (req, res) => {
	try {
		const note = await Note.findById(req.params.id);
		if (note == null) throw new Error("Note not found");
		note.note = (req.body as INote).note;
		await note.save();
		res.status(200).send(note);
	} catch (error) {
		res.status(404).send(error);
	}
});

// delete
app.delete("/notes/:id", async (req, res) => {
	try {
		const note = await Note.findByIdAndDelete(req.params.id);
		if (!note) return res.status(404).send();
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
