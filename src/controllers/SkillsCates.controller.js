const SkillCategory = require("../models/SkillsCates");

const getAllSkillsCategories = async (req, res) => {
  try {
    const skillCategories = await SkillCategory.find();
    res.status(200).json({ no: skillCategories.length, skillCategories });
  } catch (error) {
    res.status(500).json({
      message: "Error getting skill categories",
      error: error.message,
    });
  }
};

const createSkillCategory = async (req, res) => {
  const { categoryName } = req.body;

  try {
    const newSkillCategory = new SkillCategory({
      skillCategoryName: categoryName,
    });
    const savedCategory = await newSkillCategory.save();

    res
      .status(201)
      .json({ message: "created skill category successfully", savedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating skill category", error: error.message });
  }
};

const updateSkillCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;

  try {
    const updatedCategory = await SkillCategory.findByIdAndUpdate(
      id,
      { skillCategoryName: categoryName },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "skill category updated", updatedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating skill category", error: error.message });
  }
};

const deleteSkillCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await SkillCategory.findByIdAndDelete(id);
    res.status(200).json({ message: "Skill category deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting skill category", error: error.message });
  }
};

const getSpecificCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const cate = await SkillCategory.findById(id);
    res.status(200).json({
      message: "Overrided Skill Category Successfully",
      cate,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in Specific Skill Category",
      error: error.message,
    });
  }
};

module.exports = {
  getAllSkillsCategories,
  createSkillCategory,
  updateSkillCategory,
  deleteSkillCategory,
  getSpecificCategory,
};
