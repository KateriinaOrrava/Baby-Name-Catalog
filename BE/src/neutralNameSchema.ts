/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
const { Schema } = mongoose;
const neutralNameSchema = new Schema({
  name: String,
  meaning: String,
});

export default mongoose.model('NeutralName', neutralNameSchema, 'genderNeutralNames');
