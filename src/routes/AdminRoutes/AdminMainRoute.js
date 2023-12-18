const express = require("express");
const {
  registerUser,
  authenticate,
  updateUserProfile,
} = require("../../controllers/User.Controller");
const { checkTokenMiddleware } = require("../../middlewares/user");

const adminRoutes = express.Router();

adminRoutes.get("/", (req, res) => {
  res.send("Hello from admin route");
});

adminRoutes.post("/register", registerUser);
adminRoutes.post("/login", authenticate);
adminRoutes.put("/profile/update", checkTokenMiddleware, updateUserProfile);

module.exports = adminRoutes;
