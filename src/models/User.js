import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['m', 'f'],
  },
  age: {
    type: Number,
  }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

export default User;