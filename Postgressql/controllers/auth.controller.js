const { User } = require("../models");
const { asyncWrapper } = require("../middlewares/asyncWrapper.middleware.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = asyncWrapper(async function (req, res) {
  const { username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "2hr",
  });

  const userData = {
    id: user.id,
    username: user.name,
    email: user.email,
  };
  return res
    .status(200)
    .json({ userData, token, message: "Signed up successfully!" });
});

exports.logIn = asyncWrapper(async function (req, res) {
  const { username, email, password } = req.body;

  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(500).send("Invalid username, Try Again!");
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return res.status(500).send("Invalid password,Try Again");
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "2hr",
  });

  const userData = {
    id: user.id,
    username: user.name,
    email: user.email,
  };

  return res.status(200).json({
    message: "Login success!",
    token,
    userData,
  });
});

exports.getUser = asyncWrapper(async function (req, res) {
  const users = await User.findAll();
  return res.status(200).send(users);
});
