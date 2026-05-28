import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  preferences: {
    diet: { type: String, enum: ['vegetarian', 'vegan', 'non-veg', 'flexitarian'], default: 'flexitarian' },
    transport: { type: String, enum: ['car', 'bike', 'public', 'walk'], default: 'public' },
    goals: [{ type: String }],
    budgetRange: { type: String, default: 'medium' }
  },
  ecoScore: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
export default User;