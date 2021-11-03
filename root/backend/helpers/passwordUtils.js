const bcrypt = require('bcrypt');

const validPassword = (password, hashedPassword) => {
  const verified = bcrypt.compareSync(password, hashedPassword);
  console.log(verified);
  return verified;
}

module.exports = {
  validPassword,
};
