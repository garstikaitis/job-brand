import mongoose from 'mongoose';
import { EducationSchema } from './education.model';
import { ExperienceSchema } from './experience.model';
import { SkillSchema } from './skill.model';
import { ValueSchema } from './value.model';

const Schema = mongoose.Schema;

const RequirementsSchema = new Schema({
  education: EducationSchema,
  experience: [ExperienceSchema],
  skills: [SkillSchema],
  values: [ValueSchema],
});

RequirementsSchema.statics.addExperience = async function(expId, args) {
  const Experience = mongoose.model('Experience');
  const experience = await new Experience({ ...args });
  await this.findByIdAndUpdate(expId, { $push: { experience } });
  return {
    experience: await experience.save(),
  };
};

RequirementsSchema.statics.addSkill = async function(skillId, args) {
  const Skill = mongoose.model('Skill');
  const skill = await new Skill({ ...args });
  await this.findByIdAndUpdate(skillId, { $push: { skills: skill } });
  return {
    skill: await skill.save(),
  };
};

RequirementsSchema.statics.addValue = async function(valueId, args) {
  const Value = mongoose.model('Value');
  const value = await new Value({ ...args });
  await this.findByIdAndUpdate(valueId, { $push: { values: value } });
  return {
    value: await value.save(),
  };
};

RequirementsSchema.statics.updateEducation = async function(eduId, args) {
  const Education = mongoose.model('Education');
  const education = await new Education({ ...args });
  await this.findByIdAndUpdate(eduId, { $set: { education } });
  return {
    education: await education.save(),
  };
};

const Requirements = mongoose.model('Requirements', RequirementsSchema);

export { RequirementsSchema, Requirements };
