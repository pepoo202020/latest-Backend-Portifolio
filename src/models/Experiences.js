const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  companyLink: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  stillPresent: {
    type: Boolean,
  },
  description: {
    type: String,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;
