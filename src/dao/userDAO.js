const User = require('../models/userModel');

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUserById = async (id) => {
  return User.findById(id).where({ isDeleted: false });
};

const getUsers = async () => {
  return User.find({ isDeleted: false });
};

const updateUser = async (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true }).where({ isDeleted: false });
};

const deleteUser = async (id) => {
  return User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
