const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if the user is already existing
    const existingUser = await User.findOne({ userEmail: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt round

    // create a new user with hash password
    const newUser = new User({
      userEmail: email,
      userPassword: hashedPassword,
    });

    // save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error creating user", error: error.message });
  }
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find the user by email
    const user = await User.findOne({ userEmail: email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // compare the passwords
    const isMatch = await bcrypt.compare(password, user.userPassword);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    //create jwt token for authentication
    const token = jwt.sign(
      { id: user._id, email: user.userEmail },
      process.env.JWT_SECRET,
      {
        expiresIn: "12h", // text expiration date
      }
    );
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({
      message: "User authenticated successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ menubar: "error in login", error: error.message });
  }
};

// update user profile
const updateUserProfile = async (req, res) => {
  const token = req.cookies.token;

  const { password } = req.body;
  try {
    // find the user by email
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    // Update user's password
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.userPassword = hashedPassword;
    }
    // Save updated user data
    user = await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

module.exports = { registerUser, authenticate, updateUserProfile };
