import express from 'express';
import User from '../user/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/authenticate', async (req, res) => {
  let passwordMatches;
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user);
    if (err) throw err;
    if (!user) {
      res.status(500).json({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    } else if (user) {
      bcrypt.compare(
        req.body.password,
        user.password,
        (err, passwordMatches) => {
          if (err) throw err;
          if (!passwordMatches) {
            res.status(500).json({
              success: false,
              message: 'Authentication failed. Wrong password.',
            });
          } else {
            const payload = {
              email: user.email,
            };
            const token = jwt.sign(payload, 'secret123123', {
              expiresIn: 86400, // expires in 24 hours
            });
            return res.status(200).json({
              success: true,
              message: 'Enjoy your token!',
              token: token,
            });
          }
        },
      );
    }
  });
});

router.post('/logout', async (req, res) => {
  req.headers['x-access-token'] = null;
  return res.json({ message: 'Logged out', redirect: '/login' });
});

export default router;
