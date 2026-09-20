import express from 'express';

const router = express.Router();

// POST /poses
// Input:  { "vibe": "confident", "peopleCount": "solo" }
// Output: { "poses": [ { name, imageUrl, instructions: {...} }, x3 ] }
//
// PALAK: this is where your pose lookup/generation logic plugs in.
// Always return exactly 3 poses. See the API contract doc for the exact shape.
router.post('/', async (req, res) => {
  const { vibe, peopleCount } = req.body;
  if (!vibe || !peopleCount) {
    return res.status(400).json({ error: 'vibe and peopleCount are required' });
  }

  // TODO (Palak): replace with real lookup table or generation call
  const placeholderPoses = {
    poses: [
      { name: 'Placeholder Pose 1', imageUrl: null, instructions: {} },
      { name: 'Placeholder Pose 2', imageUrl: null, instructions: {} },
      { name: 'Placeholder Pose 3', imageUrl: null, instructions: {} },
    ],
  };

  res.json(placeholderPoses);
});

export default router;
