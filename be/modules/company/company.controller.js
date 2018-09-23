import express from 'express';
import { Company } from './company.model';
import { default as authMiddleware } from '../auth/auth.middleware';

const router = express.Router();

router.get('/companies', authMiddleware, async (req, res) => {
  try {
    const companies = await Company.find({});
    return res.status(200).json(companies);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error getting all companies' });
  }
});

router.get('/companies/:slug', authMiddleware, async (req, res) => {
  try {
    const { slug } = req.params;
    const company = await Company.findOne({ slug })
      .populate('jobs')
      .populate('jobs.requirements');
    return res.status(200).json(company);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Error getting company', error });
  }
});

router.post('/companies/:slug/job', authMiddleware, async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, address, country } = req.body;
    const jobSlug = req.body.slug;
    const { job } = await Company.addJob(slug, {
      title,
      address,
      country,
      slug: jobSlug,
    });
    return res.status(201).json(job);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error creating job' });
  }
});

export default router;
