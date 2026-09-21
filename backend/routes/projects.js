import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// POST /projects
// Creates a new project when the user picks their vibe + peopleCount (Screen 1)
router.post('/', async (req, res) => {
  const { userId, vibe, peopleCount } = req.body;
  if (!userId || !vibe || !peopleCount) {
    return res.status(400).json({ error: 'userId, vibe, and peopleCount are required' });
  }

  try {
    const project = await Project.create({ userId, vibe, peopleCount });
    res.status(201).json(project);
  } catch (err) {
    console.error('Create project error:', err);
    res.status(500).json({ error: 'Could not create project' });
  }
});

// GET /projects/:id
// Fetches current project state — frontend polls/reads this as the user moves
// through upload -> pose studio -> board screens
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch project' });
  }
});

// PATCH /projects/:id
// Generic update — used to attach photos, poses, or board once each step completes
router.patch('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    console.error('Update project error:', err);
    res.status(500).json({ error: 'Could not update project' });
  }
});

export default router;
