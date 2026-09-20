import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // temp local storage before pushing to Cloudinary

// POST /upload
// Accepts one or more photos, pushes each to Cloudinary, returns their asset info.
router.post('/', upload.array('photos', 15), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadResults = await Promise.all(
      files.map((file) =>
        cloudinary.uploader.upload(file.path, { folder: 'vybe/uploads' })
      )
    );

    const assets = uploadResults.map((result) => ({
      assetId: result.public_id,
      url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
    }));

    res.json({ assets });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;
