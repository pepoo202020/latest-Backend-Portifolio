const Skills = require("../models/Skills");
const SkillCates = require("../models/SkillsCates");

// create a new Skill
const createNewSkill = async (req, res) => {
  const { skillName, skillImage, skillCategory } = req.body;
  try {
    const skillCate = await SkillCates.findOne({
      skillCategoryName: skillCategory,
    });
    if (!skillCate) {
      return res.status(400).json({
        message: "Invalid Skill Category",
      });
    }

    const newSkill = new Skills({
      skillName: skillName,
      skillImage: skillImage,
      skillCategory: skillCate._id,
    });
    const savedSkills = await newSkill.save();
    res.status(201).json({
      message: "New Skill Created",
      savedSkills,
    });
  } catch (error) {
    res.status(500).json({
      message: "error while creating Skill",
      error,
    });
  }
};

// update skill
const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { skillName, skillImage, skillCategory } = req.body;
  try {
    const skillCate = await SkillCates.findOne({
      skillCategoryName: skillCategory,
    });
    if (!skillCate) {
      return res.status(400).json({
        message: "Invalid Skill Category",
      });
    }
    const updatedSkill = await Skills.findByIdAndUpdate(
      id,
      { skillName, skillImage, skillCategory: skillCate._id },
      { new: true }
    );
    res.status(201).json({
      message: "Skill Updated",
      updatedSkill,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while updating Skill",
      error: err,
    });
  }
};

// delete skill
const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    await Skills.findByIdAndDelete(id);
    res.status(201).json({
      message: "Skill Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: "error while deleting Skill",
      error: err,
    });
  }
};

// geta all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.find().populate(
      "skillCategory",
      "skillCategoryName"
    );

    res.status(201).json({
      message: "Skills Retrieved",
      skills,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while retrieving skills",
      error: err,
    });
  }
};

// get by category

const filterSkillsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const skills = await Skills.find({ skillCategory: categoryId });
    res.status(200).json({
      message: "Skills Retrieved",
      skills,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error filtering skills", error: error.message });
  }
};

const getAllSkillsWithoutProgramCategory = async (req, res) => {
  const programCategoryToExclude = "657ac80a21e6d51448cc2796"; // Replace with your program category name

  try {
    // Fetch all skills except those linked to the specified program category
    const skills = await Skills.find({
      skillCategory: { $ne: programCategoryToExclude },
    });

    res.status(200).json({ message: "successfully overrided skills", skills });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching skills", error: error.message });
  }
};

const getSpecificSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skills.findById(id).populate(
      "skillCategory",
      "skillCategoryName"
    );
    res.status(200).json({
      message: "Overrided Skill Successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: "error Overrided Skill",
      error: error.message,
    });
  }
};

module.exports = {
  createNewSkill,
  deleteSkill,
  filterSkillsByCategory,
  getAllSkills,
  updateSkill,
  getAllSkillsWithoutProgramCategory,
  getSpecificSkill,
};
