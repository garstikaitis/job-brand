import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { default as companiesRouter } from './modules/company/company.controller';
import { default as usersRouter } from './modules/user/user.controller';
import { default as authRouter } from './modules/auth/auth.controller';
import { default as authMiddleware } from './modules/auth/auth.middleware';

try {
  mongoose.connect('mongodb://localhost/job-brand');

  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api', [companiesRouter, usersRouter, authRouter]);

  app.get('/', (req, res) => {
    return res.json({ sucess: true });
  });

  app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
  });
} catch (error) {
  console.log(error);
}
