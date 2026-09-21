# VYBE

AI-powered visual content assistant for social media.

> You bring the photos. VYBE finds the vibe.

## Track

Track 2 — Generative Content Workflows

## The Problem

Turning a camera roll of real photos into a cohesive, aesthetic social media post
requires photography, posing, editing, and design skills most people don't have.
VYBE acts as a personal visual-content assistant: it suggests poses to shoot,
analyzes uploaded photos, and composes them into a ready-to-post carousel —
automatically cropped and optimized for each platform.

## How We Used Cloudinary

- **Upload API** — all user photos are ingested through Cloudinary on upload
- **AI-powered analysis** — Cloudinary's media intelligence extracts orientation,
  subject position, and composition info used to decide which photo fits which
  slide role (cover / full-width / detail)
- **Transformations** — the same source photo is cropped and reformatted per
  platform (Instagram 4:5, Story 9:16) using content-aware cropping, so the
  subject stays in frame without manual editing
- **Optimized delivery** — `f_auto` and `q_auto` applied on every delivered
  image for automatic format and quality optimization

_(Fill in further detail here once Palak's analysis/pose logic and the full
compose pipeline are wired in — this section is what Cloudinary's judges read
first, so be specific about which endpoints call which Cloudinary features.)_

## Tech Stack

- **Frontend:** [Pooja to fill in]
- **Backend:** Node.js + Express
- **Media:** Cloudinary
- **AI/Logic:** [Palak to fill in]
- **Database:** MongoDB (via Mongoose)

## Project Structure

```
vybe-backend/
├── config/
│   ├── cloudinary.js       # Cloudinary SDK setup
│   └── db.js               # MongoDB connection
├── models/
│   └── Project.js          # Project schema — vibe, photos, poses, board
├── routes/
│   ├── projects.js         # POST /projects, GET/PATCH /projects/:id
│   ├── upload.js            # POST /upload
│   ├── analyze.js           # POST /analyze  (Palak's logic plugs in here)
│   ├── poses.js              # POST /poses    (Palak's logic plugs in here)
│   └── compose.js           # POST /compose
├── uploads/                 # temp local storage before Cloudinary push
├── .env.example
├── .gitignore
├── server.js
└── package.json
```

## Setup Instructions

1. Clone the repo
   ```
   git clone <repo-url>
   cd vybe-backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   ```
   cp .env.example .env
   ```
   Then fill in your own Cloudinary credentials in `.env`
   (get these free at [cloudinary.com](https://cloudinary.com) — no credit card required):
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

4. Run the server
   ```
   npm run dev
   ```
   Server runs at `http://localhost:4000`

## How to Test

_(Fill in once endpoints are functional — e.g. sample curl commands or
Postman collection link for `/upload`, `/analyze`, `/poses`, `/compose`)_

```
curl -X POST http://localhost:4000/upload \
  -F "photos=@/path/to/photo.jpg"
```

## Live Demo

_(Link to be added before submission)_

## Demo Video

_(Link to be added before submission — 2 to 4 minutes, showing the product
AND the Cloudinary workflow specifically)_

## Team

- [You] — Backend + Cloudinary architecture
- Pooja — Frontend
- Palak — AI / API integration

## Hackathon Checklist

- [ ] All team members registered individually on HackIndia
- [ ] Cloudinary account created
- [ ] API keys in `.env`, not committed to repo
- [ ] Live working demo deployed
- [ ] README complete (this file)
- [ ] Demo video recorded (2–4 min, shows Cloudinary workflow)
- [ ] Cloudinary feedback survey completed: cld.media/hackathon-survey
