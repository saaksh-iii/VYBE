import express from 'express';

const router = express.Router();

// POST /analyze
// Input:  { "assetId": "vybe/uploads/abc123" }
// Output: { assetId, peopleCount, orientation, subjectPosition, background, suggestedRole }
//
// PALAK: this is where your photo analysis logic plugs in.
// Use Cloudinary's AI capabilities (e.g. cloudinary.api.resource with
// media metadata, or the Upload API's auto-tagging) to derive these fields.
// See the API contract doc for the exact shape to return.
router.post('/', async (req, res) => {
  const { assetId } = req.body;
  if (!assetId) {
    return res.status(400).json({ error: 'assetId is required' });
  }

  // TODO (Palak): replace this placeholder with real analysis
  const placeholderResult = {
    assetId,
    peopleCount: null,
    orientation: null,
    subjectPosition: null,
    background: null,
    suggestedRole: null,
  };

  res.json(placeholderResult);
});

export default router;
