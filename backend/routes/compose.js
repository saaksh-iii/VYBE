import express from 'express';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();

// POST /compose
// Input:  { "assetIds": ["vybe/uploads/abc123", ...], "vibe": "cute" }
// Output: { "slides": [ { assetId, url, role }, ... ] }
//
// This is where Cloudinary transformations turn selected photos into the
// final Instagram-ready carousel (crop, aspect ratio, optimization).
router.post('/', async (req, res) => {
  const { assetIds, vibe } = req.body;
  if (!assetIds || !Array.isArray(assetIds) || assetIds.length === 0) {
    return res.status(400).json({ error: 'assetIds array is required' });
  }

  try {
    const slides = assetIds.map((assetId, index) => {
      const url = cloudinary.url(assetId, {
        transformation: [
          { width: 1080, height: 1350, crop: 'fill', gravity: 'auto' }, // Instagram 4:5
          { fetch_format: 'auto', quality: 'auto' }, // f_auto, q_auto
        ],
      });
      return { assetId, url, role: index === 0 ? 'cover' : `slide-${index + 1}` };
    });

    res.json({ slides, vibe });
  } catch (err) {
    console.error('Compose error:', err);
    res.status(500).json({ error: 'Compose failed' });
  }
});

export default router;
