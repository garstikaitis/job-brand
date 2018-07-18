import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: String,
  company: { type: mongoose.SchemaTypes.ObjectId, ref: 'Company' },
});

const JobModel = mongoose.model('Job', JobSchema);

export { JobSchema, JobModel };
