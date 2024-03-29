const User = require("../models/User");

async function createUser(username, hashedPassword) {
  // adapt user to project requirements
  const user = new User({
    username,
    hashedPassword,
    likedPlays: [],
  });

  await user.save();

  return user;
}

async function getUserByUsername(username) {
  const pattern = new RegExp(`^${username}$`, "i");
  return await User.findOne({ username: { $regex: pattern } });
}

module.exports = {
  createUser,
  getUserByUsername,
};
