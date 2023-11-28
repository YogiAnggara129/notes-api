import mongoose, { Schema } from "mongoose";

export interface INote {
	note: string;
	// id: number;
}

const noteSchema = new Schema<INote>({
	note: { type: String, required: true },
	// id: { type: Number, required: true },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
