const express = require("express");

const projectsRoutes = express.Router();

projectsRoutes.get("/", () => {
  console.log("projects");
});

module.exports = projectsRoutes;
