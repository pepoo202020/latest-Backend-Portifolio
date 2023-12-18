const ProjectCategory = require("../models/ProjectCates");

// get all project categories
const projectCategories = async (req, res) => {
  try {
    const projectCates = await ProjectCategory.find();
    res.status(200).json({ no: projectCates.length, projectCates });
  } catch (error) {
    res.status(500).json(error);
  }
};

const projectCategoryByID = async (req, res) => {
  const { id } = req.params;
  try {
    const projectCate = await ProjectCategory.findById(id);
    res
      .status(200)
      .json({ message: "Overrided Project Category", projectCate });
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new project category
const newProjectCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const projectCategory = new ProjectCategory({
      projectCateName: categoryName,
    });
    const savedCategory = await projectCategory.save();
    res
      .status(201)
      .json({ message: "Created category Successfully", savedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating category Successfully", error });
  }
};

// update a project category
const updateProjectCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  try {
    const updatedCategory = await ProjectCategory.findByIdAndUpdate(
      id,
      { projectCateName: categoryName },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Project category updated", updatedCategory });
  } catch (error) {
    res.status(500).json({
      message: "Error updating project category",
      error: error.message,
    });
  }
};

// delete Project Category

const deleteProjectCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await ProjectCategory.findByIdAndDelete(id);
    res.status(200).json({ message: "Project category deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting project category",
      error: error.message,
    });
  }
};

module.exports = {
  projectCategories,
  deleteProjectCategory,
  updateProjectCategory,
  newProjectCategory,
  projectCategoryByID,
};
