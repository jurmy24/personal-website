const User = require("../model/user");

exports.createUser = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });
  res.send(newUser);
};
