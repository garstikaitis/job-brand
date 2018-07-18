import express from 'express';
import Company from './company.model';

const router = express.Router();

router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find({});
    return res.json(companies);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error getting all companies' });
  }
});

export default router;
