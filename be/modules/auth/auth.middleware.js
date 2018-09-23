import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.use((req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, 'secret123123', (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });
    res.redirect('/login');
  }
});

export default router;
