import express from 'express';
import { sendMessage, getChatHistory } from '../controllers/aiController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/chat', protect, sendMessage);
router.get('/history', protect, getChatHistory);


export default router;