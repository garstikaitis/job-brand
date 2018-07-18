import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Company = new Schema({
  name: String,
});

export default mongoose.model('Company', Company);
