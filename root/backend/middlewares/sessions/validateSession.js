const validateSession = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(403).json({ error: 'Require user authentication.' });
};

const getUser = (req, res) => {
  const {
    email,
    firstName,
    lastName,
    userName,
    _id: id,
  } = req.user;
  return res.status(200).json({
    user: {
      email,
      firstName,
      lastName,
      userName,
      id,
    }
  });
}

module.exports = {
  validateSession,
  getUser,
}
