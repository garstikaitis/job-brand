import express from 'express';
import { Company } from './company.model';

const router = express.Router();

router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find({});
    return res.status(200).json(companies);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error getting all companies' });
  }
});

router.get('/companies/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId).populate('jobs');
    return res.status(200).json(company);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: 'Error getting company', error });
  }
});

router.post('/companies/:companyId/job', async (req, res) => {
  try {
    const { companyId } = req.params;
    const { title } = req.body;
    console.log(companyId);
    const { job } = await Company.addJob(companyId, { title });
    return res.status(201).json(job);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error creating job' });
  }
});

export default router;
