const Experience = require("../models/Experiences");

// Create new
const newExperience = async (req, res) => {
  const {
    title,
    company,
    companyLink,
    location,
    startDate,
    endDate,
    stillPresent,
    description,
  } = req.body;
  try {
    const experience = new Experience({
      title,
      company,
      companyLink,
      location,
      startDate,
      endDate,
      stillPresent,
      description,
    });
    const createdExperience = await experience.save();
    res.status(201).json({
      message: "Created Experience Successfully",
      createdExperience,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in creating Experience",
      error,
    });
  }
};

// get all
const allExperiences = async (_req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json({
      message: "Retrived All Experiences Successfully",
      no: experiences.length,
      experiences,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error In Retriving Experiences",
    });
  }
};

// get one
const experience = async (req, res) => {
  const { id } = req.params;
  try {
    const experienceData = await Experience.findById(id);
    if (!experienceData) {
      return res.status(404).json({
        message: "No Experience Found",
      });
    }
    res.status(200).json({
      message: "Successful Retrieval of Experience Data",
      experienceData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve Experience data",
    });
  }
};

// update
const updateExperience = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    company,
    companyLink,
    location,
    startDate,
    endDate,
    stillPresent,
    description,
  } = req.body;
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      {
        title,
        company,
        companyLink,
        location,
        startDate,
        endDate,
        stillPresent,
        description,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateExperience) {
      return res.status(404).json({
        message: "No Experience found",
      });
    }
    res.status(200).json({
      message: "Updated Successfully",
      updatedExperience,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in updating Experience",
      error,
    });
  }
};

// delete
const deleteExperience = async (req, res) => {
  const { id } = req.params;
  try {
    await Experience.findByIdAndDelete(id);
    res.status(200).json({
      message: "Deleted Experience Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error in updating Experience",
    });
  }
};

module.exports = {
  allExperiences,
  newExperience,
  updateExperience,
  deleteExperience,
  experience,
};
