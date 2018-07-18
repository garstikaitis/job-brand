import express from 'express';
import User from '../user/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/authenticate', async (req, res) => {
  let passwordMatches;
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
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
            res.json({
              success: false,
              message: 'Authentication failed. Wrong password.',
            });
          } else {
            const payload = {
              email: user.email,
            };
            const token = jwt.sign(payload, 'secret123123', {
              expiresIn: 1440, // expires in 24 hours
            });
            return res.json({
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

export default router;
