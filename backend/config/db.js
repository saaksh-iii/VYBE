import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    console.warn('DATABASE_URL not set — skipping DB connection (routes needing DB will fail)');
    return;
  }
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
}
