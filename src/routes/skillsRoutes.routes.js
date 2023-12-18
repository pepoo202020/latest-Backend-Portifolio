const express = require("express");
const {
  createNewSkill,
  deleteSkill,
  filterSkillsByCategory,
  getAllSkills,
  updateSkill,
  getAllSkillsWithoutProgramCategory,
  getSpecificSkill,
} = require("../controllers/Skills.Controller");

const skillsRoutes = express.Router();

skillsRoutes.post("/new", createNewSkill);
skillsRoutes.delete("/:id", deleteSkill);
skillsRoutes.get("/filter/:categoryId", filterSkillsByCategory);
skillsRoutes.get("/all", getAllSkills);
skillsRoutes.put("/:id", updateSkill);
skillsRoutes.get("/withoutP/", getAllSkillsWithoutProgramCategory);
skillsRoutes.get("/specific/:id", getSpecificSkill);

module.exports = skillsRoutes;
