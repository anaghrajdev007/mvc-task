const userDAO = require('../dao/userDAO');
const UserDTO = require('../dto/userDTO');

const createUser = async (userData) => {
  const user = await userDAO.createUser(userData);
  return new UserDTO(user);
};

const getUserById = async (id) => {
  const user = await userDAO.getUserById(id);
  return new UserDTO(user);
};

const getUsers = async () => {
  const users = await userDAO.getUsers();
  return users.map(user => new UserDTO(user));
};

const updateUser = async (id, userData) => {
  const user = await userDAO.updateUser(id, userData);
  return new UserDTO(user);
};

const deleteUser = async (id) => {
  await userDAO.deleteUser(id);
};

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
