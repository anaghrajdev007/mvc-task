const userService = require('../services/userService');
const { validateUser, validateId } = require('../utils/validator');

const listUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await validateId(userId);
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    await validateUser(userData);
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    await validateId(userId);
    await validateUser(userData);
    const updatedUser = await userService.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const patchUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = req.body;
    await validateId(userId);
    const updatedUser = await userService.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await validateId(userId);
    await userService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};
