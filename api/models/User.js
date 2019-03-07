import mongoose from 'mongoose';
import {
  hash
} from 'bcryptjs';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true

  },
   email: {
    type: String,
    unique: true,

  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: String,
  },

}, {
  timestamps: true
});
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 12)
  }
});

const User = mongoose.model('User', userSchema);
export default User;