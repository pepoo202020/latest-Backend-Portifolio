const Project = require("../models/Projects");
const Skill = require("../models/Skills");
const ProjectCategory = require("../models/ProjectCates");

const newProject = async (req, res) => {
  const {
    title,
    subtitle,
    description,
    images,
    mainImage,
    link,
    skills_used = [],
    programs,
    project_Categories = [],
  } = req.body;
  try {
    // Convert skills_used strings to ObjectIds
    const skillIds =
      skills_used.length > 0
        ? await Skill.find({ skillName: { $in: skills_used } }).distinct("_id")
        : [];

    // Convert project_Categories strings to ObjectIds
    const categoryIds =
      project_Categories.length > 0
        ? await ProjectCategory.find({
            projectCateName: { $in: project_Categories },
          }).distinct("_id")
        : [];

    const project = new Project({
      title,
      subtitle,
      description,
      images,
      mainImage,
      link,
      skills_used: skillIds,
      programs,
      project_Categories: categoryIds,
    });
    const savedProject = await project.save();
    res.status(201).json({
      message: "Successfully Created New Project",
      savedProject,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    subtitle,
    description,
    images,
    mainImage,
    link,
    skills_used = [],
    programs,
    project_Categories = [],
  } = req.body;

  try {
    // Convert skills_used strings to ObjectIds
    const skillIds =
      skills_used.length > 0
        ? await Skill.find({ skillName: { $in: skills_used } }).distinct("_id")
        : [];

    // Convert project_Categories strings to ObjectIds
    const categoryIds =
      project_Categories.length > 0
        ? await ProjectCategory.find({
            projectCateName: { $in: project_Categories },
          }).distinct("_id")
        : [];
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        subtitle,
        description,
        images,
        mainImage,
        link,
        skills_used: skillIds,
        programs,
        project_Categories: categoryIds,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully Updated Project",
      updatedProject,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating project", error: error.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting project", error: error.message });
  }
};

const getSpecificProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id)
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");

    res.status(200).json({
      message: "Project Overrided Successfully",
      projectDetails: project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching specific project",
      error: error.message,
    });
  }
};

const getAllProjects = async (_req, res) => {
  try {
    const projects = await Project.find()
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");
    const projectsWithCategories = projects.map((project) => ({
      projectDetails: project,
      categoryName: project.project_Categories.projectCateName,
      skillName: project.skills_used.skillName,
    }));
    res.status(200).json({
      message: "Overrided Projects Successfully",
      No: projects.length,
      projectsWithCategories,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching all projects", error: error.message });
  }
};

const filterProjectsWithProjectCategory = async (req, res) => {
  const { categoryName } = req.params;

  try {
    // Find the category ObjectId(s) based on the category names
    const categories = await ProjectCategory.find({
      projectCateName: { $in: categoryName.split(",") },
    });

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Categories not found" });
    }

    // Find projects that belong to any of the specified categories
    const categoryIds = categories.map((category) => category._id);
    const projects = await Project.find({
      project_Categories: { $in: categoryIds },
    })
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");
    const projectsWithCategories = projects.map((project) => ({
      projectDetails: project,
      categoryName: project.project_Categories.projectCateName,
      skillName: project.skills_used.skillName,
    }));
    res.status(200).json({
      message: "Overrided Projects Successfully",
      No: projects.length,
      projectsWithCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error filtering projects by project category",
      error: error.message,
    });
  }
};

const filterProjectsWithSkills = async (req, res) => {
  const { skillNames } = req.params;

  try {
    // Find the skill ObjectId(s) based on the skill names
    const skills = await Skill.find({
      skillName: { $in: skillNames.split(",") },
    });

    if (!skills || skills.length === 0) {
      return res.status(404).json({ message: "Skills not found" });
    }

    // Find projects that use any of the specified skills
    const skillIds = skills.map((skill) => skill._id);
    const projects = await Project.find({
      skills_used: { $in: skillIds },
    })
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");
    const projectsWithCategories = projects.map((project) => ({
      projectDetails: project,
      categoryName: project.project_Categories.projectCateName,
      skillName: project.skills_used.skillName,
    }));
    res.status(200).json({
      message: "Overrided Projects Successfully",
      No: projects.length,
      projectsWithCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error filtering projects by skills used",
      error: error.message,
    });
  }
};

const filterProjectsWithPrograms = async (req, res) => {
  const { programNames } = req.params;

  try {
    // Find projects that use any of the specified programs
    const projects = await Project.find({
      programs: { $in: programNames.split(",") },
    })
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");
    const projectsWithCategories = projects.map((project) => ({
      projectDetails: project,
      categoryName: project.project_Categories.projectCateName,
      skillName: project.skills_used.skillName,
    }));
    res.status(200).json({
      message: "Overrided Projects Successfully",
      No: projects.length,
      projectsWithCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error filtering projects by programs used",
      error: error.message,
    });
  }
};

const filterProjectsByMultipleCriteria = async (req, res) => {
  const { categoryNames, skillNames, programNames } = req.params;

  try {
    let projectQuery = {};

    // Filter by project categories
    if (categoryNames) {
      const categories = await ProjectCategory.find({
        projectCateName: { $in: categoryNames.split(",") },
      });
      const categoryIds = categories.map((category) => category._id);
      projectQuery.project_Categories = { $in: categoryIds };
    }

    // Filter by skills used
    if (skillNames) {
      const skills = await Skill.find({
        skillName: { $in: skillNames.split(",") },
      });
      const skillIds = skills.map((skill) => skill._id);
      projectQuery.skills_used = { $in: skillIds };
    }

    // Filter by programs
    if (programNames) {
      projectQuery.programs = { $in: programNames.split(",") };
    }

    const projects = await Project.find(projectQuery)
      .populate("project_Categories", "projectCateName")
      .populate("skills_used", "skillName");

    if (categoryNames || skillNames || programNames) {
      const projectsWithCategories = projects.map((project) => ({
        projectDetails: project,
        categoryName: project.project_Categories.projectCateName,
        skillName: project.skills_used.skillName,
      }));

      res.status(200).json({
        message: "Filtered Successfully",
        No: projectsWithCategories.length,
        projectsWithCategories,
      });
    } else {
      res.status(200).json({
        message: "No filters applied",
        No: projects.length,
        projects,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error filtering projects by multiple criteria",
      error: error.message,
    });
  }
};

module.exports = {
  newProject,
  updateProject,
  deleteProject,
  getSpecificProject,
  getAllProjects,
  filterProjectsWithProjectCategory,
  filterProjectsWithSkills,
  filterProjectsWithPrograms,
  filterProjectsByMultipleCriteria,
};
