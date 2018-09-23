import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { Requirements } from '../requirements/requirements.model';

const JobSchema = new Schema({
  title: String,
  country: String,
  address: String,
  slug: String,
  company: { type: mongoose.SchemaTypes.ObjectId, ref: 'Company' },
  requirements: { type: mongoose.SchemaTypes.ObjectId, ref: 'Requirements' },
});

// education: { type: mongoose.SchemaTypes.ObjectId, ref: 'Education' },
//   experience: [ExperienceSchema],
//   skills: [SkillSchema],
//   values: [ValueSchema],

JobSchema.statics.updateRequirements = async function(jobId, args) {
  const requirements = await new Requirements({ ...args });
  console.log(requirements);
  await this.findByIdAndUpdate(jobId, { $set: { requirements } });
  return {
    requirements: await requirements.save(),
  };
};

const JobModel = mongoose.model('Job', JobSchema);
export { JobSchema, JobModel };
