import express from 'express';
import { logActivity, getUserActivities } from '../controllers/activityController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, logActivity);
router.get('/', protect, getUserActivities);

export default router;