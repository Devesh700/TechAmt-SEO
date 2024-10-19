import mongoose, { Document, Schema } from "mongoose";

export interface Career extends Document {
  title: string;
  description: string;
  location?: string;
  employmentType?: string;
  postedDate?: Date;
}

const careerSchema: Schema<Career> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  employmentType: { type: String },
  postedDate: { type: Date, default: Date.now },
});

const Career = mongoose.models.Career as mongoose.Model<Career> || mongoose.model<Career>("Career", careerSchema);
export default Career;
