import express from 'express';
import User from './user.model';
import { Company } from '../company/company.model';
import { default as authMiddleware } from '../auth/auth.middleware';

const router = express.Router();

router.get('/users', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({}).populate('company');
    return res.json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error getting all users' });
  }
});
router.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = {
      email,
      password,
    };
    const user = await User.create(userData);
    return res.json({ success: true, user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error creating user' });
  }
});
router.post('/users/:id/companies', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const { company } = await User.addCompany(id, { name });
    return res.json(company);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error adding company to the user' });
  }
});
router.get('/users/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Error getting user' });
  }
});

export default router;
