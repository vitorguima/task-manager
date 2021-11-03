const bcrypt = require('bcrypt');

const validPassword = async (password, hashedPassword) => {
  const encodedPassword = await bcrypt.hash(password, 10);

  return encodedPassword === hashedPassword;
}

module.exports = {
  validPassword,
};
