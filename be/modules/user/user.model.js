import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Company = mongoose.model('Company');
const Schema = mongoose.Schema;

var childSchema = new Schema({ name: 'string' });

const User = new Schema({
  email: String,
  password: String,
  name: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
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

const UserModel = mongoose.model('User', User);

export default UserModel;
