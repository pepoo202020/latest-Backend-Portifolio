const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String, // Array of image URLs
    },
  ],
  mainImage: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  skills_used: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skills", // Reference to the Skills model
    },
  ],
  programs: [
    {
      type: String,
    },
  ],
  project_Categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectCategory", // Reference to the ProjectCategory model
      required: true,
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
