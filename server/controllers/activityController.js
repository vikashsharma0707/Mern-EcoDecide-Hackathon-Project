import Activity from '../models/Activity.js';
import User from '../models/User.js';

export const logActivity = async (req, res) => {
  try {
    const { activityType, description, carbonSaved, waterSaved } = req.body;
    const userId = req.user.id;

    const activity = await Activity.create({
      userId,
      activityType,
      description,
      carbonSaved: carbonSaved || 0,
      waterSaved: waterSaved || 0,
      points: Math.floor((carbonSaved || 0) * 10)
    });

    // Update user ecoScore
    await User.findByIdAndUpdate(userId, {
      $inc: { ecoScore: activity.points }
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.id })
      .sort({ date: -1 })
      .limit(50);

    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};