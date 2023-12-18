const express = require("express");
const {
  newProject,
  updateProject,
  deleteProject,
  getSpecificProject,
  getAllProjects,
  filterProjectsWithProjectCategory,
  filterProjectsWithSkills,
  filterProjectsWithPrograms,
  filterProjectsByMultipleCriteria,
} = require("../controllers/Projects.Controller");

const projectRoutes = express.Router();

projectRoutes.get("/", (_req, res) => res.send("Main Projects Route"));
projectRoutes.post("/new", newProject);
projectRoutes.put("/:id", updateProject);
projectRoutes.delete("/:id", deleteProject);
projectRoutes.get("/project/:id", getSpecificProject);
projectRoutes.get("/all", getAllProjects);
projectRoutes.get("/category/:categoryName", filterProjectsWithProjectCategory);
projectRoutes.get("/skills/:skillNames", filterProjectsWithSkills);
projectRoutes.get("/programs/:programNames", filterProjectsWithPrograms);
projectRoutes.get(
  "/filter/:categoryNames?/:skillNames?/:programNames?",
  filterProjectsByMultipleCriteria
);

module.exports = projectRoutes;
