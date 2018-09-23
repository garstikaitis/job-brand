import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ValueSchema = new Schema({
  name: String,
  description: String,
});

const Value = mongoose.model('Value', ValueSchema);

export { ValueSchema, Value };
