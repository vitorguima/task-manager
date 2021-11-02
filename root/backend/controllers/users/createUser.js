const create = require('../../services/users/createUser');

const createUser = async (req, res, _next) => {
  const {
    password,
    name,
    lastName,
    email,
  } = req.body;

  const newUser = await create.createUser({ password, name, lastName, email });

  if (newUser) {
    return res.status(200).json(newUser);
  }

  return res.status(400).json({ message: 'fail' });
}

module.exports = createUser;
