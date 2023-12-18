const mongoose = require("mongoose");

const skillCategorySchema = new mongoose.Schema({
  skillCategoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const SkillCategory = mongoose.model("SkillCategory", skillCategorySchema);

module.exports = SkillCategory;
