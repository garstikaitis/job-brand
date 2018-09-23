import express from 'express';
import { Job, JobModel } from './job.model';
import { Requirements } from '../requirements/requirements.model';
import { Experience } from '../requirements/experience.model';
import { Education } from '../requirements/education.model';
import { Skill } from '../requirements/skill.model';
import { Value } from '../requirements/value.model';
import { default as authMiddleware } from '../auth/auth.middleware';

const router = express.Router();

router.get('/jobs/:slug', authMiddleware, async (req, res) => {
  const { slug } = req.params;
  const job = await JobModel.findOne({ slug })
    .populate('requirements')
    .populate('requirements.education');
  console.log(job);
  return res.json(job);
});

router.post('/jobs/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const {
    expId,
    skillId,
    valueId,
    eduId,
    expName,
    expDesc,
    skillName,
    skillDesc,
    valueName,
    valueDesc,
    eduName,
    eduImg,
  } = req.body;
  let result = {};

  const createdExp = await Experience.create({
    name: expName,
    description: expDesc,
  });

  const { experience } = await Requirements.addExperience(createdExp._id, {
    name: expName,
    description: expDesc,
  });

  const createdSkill = await Skill.create({
    name: skillName,
    description: skillDesc,
  });

  const { skill } = await Requirements.addSkill(createdSkill._id, {
    name: skillName,
    description: skillDesc,
  });

  const createdValue = await Value.create({
    name: valueName,
    description: valueDesc,
  });

  const { value } = await Requirements.addValue(createdValue._id, {
    name: valueName,
    description: valueDesc,
  });

  const createdEdu = await Education.create({
    name: eduName,
    description: eduImg,
  });

  const { education } = await Requirements.updateEducation(createdEdu._id, {
    name: eduName,
    image: eduImg,
  });

  result.experience = experience;
  result.education = education;
  result.skills = skill;
  result.values = value;

  const { requirements } = await JobModel.updateRequirements(id, result);
  console.log(requirements);
  return res.status(200).json({
    success: true,
    message: 'Successfuly updated',
    value: requirements,
  });
});

export default router;
