const mongoose = require("mongoose");

const projectCateSchema = new mongoose.Schema({
  projectCateName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const ProjectCategory = mongoose.model("ProjectCategory", projectCateSchema);

module.exports = ProjectCategory;
