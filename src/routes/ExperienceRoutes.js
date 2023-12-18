const express = require("express");
const {
  allExperiences,
  experience,
  newExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/Experience.Controller");

const experienceRouter = express.Router();

experienceRouter.get("/", (_req, res) =>
  res.status(200).send("Main Experience Route")
);

experienceRouter.get("/all", allExperiences);
experienceRouter.get("/:id", experience);
experienceRouter.post("/new", newExperience);
experienceRouter.put("/:id", updateExperience);
experienceRouter.delete("/:id", deleteExperience);

module.exports = experienceRouter;
