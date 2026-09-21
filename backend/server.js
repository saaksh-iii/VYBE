import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import projectsRoute from './routes/projects.js';
import uploadRoute from './routes/upload.js';
import analyzeRoute from './routes/analyze.js';
import posesRoute from './routes/poses.js';
import composeRoute from './routes/compose.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.json({ status: 'VYBE backend is running' });
});

app.use('/projects', projectsRoute);
app.use('/upload', uploadRoute);
app.use('/analyze', analyzeRoute);
app.use('/poses', posesRoute);
app.use('/compose', composeRoute);

app.listen(PORT, () => {
  console.log(`VYBE backend running on http://localhost:${PORT}`);
});
