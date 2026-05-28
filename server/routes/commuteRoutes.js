import express from 'express';
import { optimizeCommute } from '../controllers/commuteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/optimize', protect, optimizeCommute);

export default router;