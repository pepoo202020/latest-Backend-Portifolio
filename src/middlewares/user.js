const User = require("../models/User");

const jwt = require("jsonwebtoken");

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(401).json({ message: "email is required" });
  }
  if (!password) {
    return res.status(401).json({ message: "password is required" });
  }
  next();
};

const checkTokenMiddleware = async (req, res, next) => {
  // get the token
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token using the secret key
    // Check if user exists in the database
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Attach user data to the request object for further processing

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { checkTokenMiddleware, loginMiddleware };
