import express from 'express';
import User from './user.model';
import Company from '../company/company.model';
import { default as authMiddleware } from '../auth/auth.middleware';

const router = express.Router();

router.get('/users', authMiddleware, async (req, res) => {
  const users = await User.find({}).populate('company');
  return res.json({ users });
});
router.post('/users', authMiddleware, async (req, res) => {
  const company = await Company.find({ name: 'Google' });
  const userData = {
    email: req.body.email,
    password: req.body.password,
    name: 'Gintaras',
    lastName: 'Arstikaitis',
    company: company[0],
  };
  const user = await User.create(userData);
  return res.json({ success: true, user });
});

export default router;
