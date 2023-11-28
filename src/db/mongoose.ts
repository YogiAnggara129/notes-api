import mongoose, { mongo } from "mongoose";

mongoose
	.connect("mongodb://127.0.0.1:27017/notes-api", {
		autoCreate: true,
		autoIndex: true,
	})
	.then(() => console.log("Database connected!"))
	.catch((err) => console.log(err));

export default mongoose;
