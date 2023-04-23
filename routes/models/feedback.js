import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema
const { ObjectId } = Schema.Types

const FeedbackSchema = new Schema({
	feedback: { type: String, maxLength: 1024, default: "" },
	response: { type: String, maxLength: 2048, default: "" },
	created: { type: Date, default: Date.now },
	email: { type: String, maxLength: 1024 },
	user: {
		type: ObjectId,
		ref: "user",
	},
});

const Feedback = model('feedback', FeedbackSchema)
export default Feedback