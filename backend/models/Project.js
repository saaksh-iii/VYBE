import mongoose from 'mongoose';

const { Schema } = mongoose;

// One sub-document per uploaded photo, filled in as it moves through
// /upload -> /analyze
const PhotoSchema = new Schema(
  {
    assetId: { type: String, required: true }, // Cloudinary public_id
    url: { type: String, required: true },
    // filled in by /analyze (Palak's logic) — null until analyzed
    peopleCount: { type: Number, default: null },
    orientation: { type: String, default: null },
    subjectPosition: { type: String, default: null },
    background: { type: String, default: null },
    suggestedRole: { type: String, default: null }, // "cover" | "full-width" | "detail"
    selected: { type: Boolean, default: false }, // did the user pick this one for the board
  },
  { _id: false }
);

// One sub-document per generated pose reference, filled in by /poses
const PoseSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String },
    instructions: {
      pose: String,
      camera: String,
      framing: String,
      lighting: String,
      expression: String,
    },
  },
  { _id: false }
);

// One sub-document per final board slide, filled in by /compose
const SlideSchema = new Schema(
  {
    assetId: { type: String, required: true },
    url: { type: String, required: true },
    role: { type: String }, // "cover" | "slide-2" | "closing" etc.
  },
  { _id: false }
);

const ProjectSchema = new Schema(
  {
    // for the hackathon, this can just be a device/session id — no real auth needed
    userId: { type: String, required: true },

    vibe: {
      type: String,
      enum: ['cute', 'natural', 'confident', 'romantic', 'cool', 'bold'],
      required: true,
    },
    peopleCount: {
      type: String,
      enum: ['solo', 'couple', 'friends', 'group'],
      required: true,
    },

    photos: [PhotoSchema],
    poses: [PoseSchema],
    board: [SlideSchema],

    status: {
      type: String,
      enum: ['created', 'uploaded', 'analyzed', 'posed', 'composed'],
      default: 'created',
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export default mongoose.model('Project', ProjectSchema);
