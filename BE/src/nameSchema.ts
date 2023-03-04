/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
const { Schema } = mongoose;
const nameSchema = new Schema({
  name: String,
  gender: String,
});

export default mongoose.model('Name', nameSchema);
