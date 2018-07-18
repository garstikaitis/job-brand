import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { CompanySchema } from '../company/company.model';
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  name: String,
  lastName: String,
  companies: [CompanySchema],
});

User.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

User.statics.addCompany = async function(userId, args) {
  const Company = mongoose.model('Company');
  const company = await new Company({ ...args });
  await this.findByIdAndUpdate(userId, { $push: { companies: company } });
  return {
    company: await company.save(),
  };
};

const UserModel = mongoose.model('User', User);

export default UserModel;
