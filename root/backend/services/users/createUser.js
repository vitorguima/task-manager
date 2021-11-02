const create = require('../../models/users/createUser');

const bcrypt = require('bcrypt');

const currentDate = Date.now();

const createUser = async (data) => {
  const {
    password,
    name,
    lastName,
    email,
  } = data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData = {
      hashedPassword,
      name,
      lastName,
      email,
      currentDate,
      role: 'user',
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

