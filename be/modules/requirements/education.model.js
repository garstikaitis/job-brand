import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  name: String,
  image: String,
});

const Education = mongoose.model('Education', EducationSchema);

export { EducationSchema, Education };
