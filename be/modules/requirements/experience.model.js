import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  name: String,
  description: String,
});

const Experience = mongoose.model('Experience', ExperienceSchema);

export { ExperienceSchema, Experience };
