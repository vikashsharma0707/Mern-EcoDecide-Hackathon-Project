import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import compareRoutes from './routes/compareRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import scannerRoutes from './routes/scannerRoutes.js';
// ... other imports
import commuteRoutes from './routes/commuteRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';


// ... after app.use('/api/ai', aiRoutes);


// ... after other routes






dotenv.config();

connectDB();

const app = express();

// app.use(cors());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/compare', compareRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/scanner', scannerRoutes);
app.use('/api/commute', commuteRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res) => {
  res.send('EcoDecide API is running... 🌱');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});