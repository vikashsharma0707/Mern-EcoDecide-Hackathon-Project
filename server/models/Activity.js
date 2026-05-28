import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activityType: {
    type: String,
    enum: ['transport', 'meal', 'reusable', 'energy', 'waste'],
    required: true
  },
  description: String,
  carbonSaved: { type: Number, default: 0 },     // in kg CO2
  waterSaved: { type: Number, default: 0 },      // in liters
  points: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;