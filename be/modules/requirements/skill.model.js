import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: String,
  description: String,
});

const Skill = mongoose.model('Skill', SkillSchema);

export { SkillSchema, Skill };
