const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skillImage: {
    type: String,
    required: true,
  },
  skillCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SkillCategory",
    required: true,
  },
});

const Skills = mongoose.model("Skills", SkillsSchema);

module.exports = Skills;
