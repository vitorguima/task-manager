const bcrypt = require('bcrypt');

const validPassword = (password, hashedPassword) => {
  const verified = bcrypt.compareSync(password, hashedPassword);

  return verified;
}

module.exports = {
  validPassword,
};
