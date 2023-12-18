const express = require("express");
const {
  projectCategories,
  newProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
  projectCategoryByID,
} = require("../controllers/ProjectCates.controller");
const projectCatesRoutes = express.Router();

projectCatesRoutes.get("/", (req, res) => {
  res.send("welcome to project categories routes");
});

projectCatesRoutes.get("/all", projectCategories);
projectCatesRoutes.post("/new", newProjectCategory);
projectCatesRoutes.put("/:id", updateProjectCategory);
projectCatesRoutes.delete("/:id", deleteProjectCategory);
projectCatesRoutes.get("/specific/:id", projectCategoryByID);

module.exports = projectCatesRoutes;
