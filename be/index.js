import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { default as companiesRouter } from './modules/company/company.controller';
import { default as usersRouter } from './modules/user/user.controller';
import { default as authRouter } from './modules/auth/auth.controller';
import { default as jobRouter } from './modules/job/job.controller';
import { default as authMiddleware } from './modules/auth/auth.middleware';
import cors from 'cors';

try {
  mongoose.connect(
    'mongodb+srv://jobbrand:QNBcc0sis9TvftaC@jobbrand-y1vfj.mongodb.net/job-brand?retryWrites=true',
  );

  const PORT = process.env.PORT || 3000;
  const app = express();
  app.use(cors('*'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', [companiesRouter, usersRouter, authRouter, jobRouter]);

  app.get('/', (req, res) => {
    return res.json({ sucess: true });
  });

  app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
  });
} catch (error) {
  console.log(error);
}
