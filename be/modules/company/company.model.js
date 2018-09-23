import mongoose from 'mongoose';
import { JobSchema } from '../job/job.model';
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  slug: String,
  jobs: [JobSchema],
});

CompanySchema.statics.addJob = async function(slug, args) {
  const Job = mongoose.model('Job');
  const job = await new Job({ ...args });
  await this.findOneAndUpdate({ slug }, { $push: { jobs: job } });
  return {
    job: await job.save(),
  };
};

const Company = mongoose.model('Company', CompanySchema);

export { CompanySchema, Company };
