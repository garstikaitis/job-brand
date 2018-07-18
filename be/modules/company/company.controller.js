import express from 'express';
import Company from './company.model';

const router = express.Router();

router.get('/companies', async (req, res) => {
  const companies = await Company.find({});
  return res.json({ companies });
});
router.post('/companies', async (req, res) => {
  const { name } = req.body;
  await Company.create({ name });
  return res.json({ success: true });
});

export default router;
