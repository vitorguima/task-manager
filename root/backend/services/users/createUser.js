const create = require('../../models/users/createUser');

const bcrypt = require('bcrypt');

const currentDate = Date.now();

const createUser = async (data) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    email,
  } = data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData = {
      hashedPassword,
      firstName,
      lastName,
      email,
      currentDate,
      role: 'user',
      userName,
    };
  
    const newUser = await create.createUser(newUserData);
    return newUser;
  } catch (_err) {
    return null;
  }
}

module.exports = {
  createUser,
};

