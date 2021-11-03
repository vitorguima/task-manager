const connection = require('../../models/connection/mongodb');

const findByUserName = async (username) => {
  try {
    const user = await connection()
      .then((db) => db.collection('users')
      .findOne({ userName: { $eq: username } }));

    return user;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

const findById = async (id) => {
  try {
    const user = await connection()
      .then((db) => db.collection('users')
      .findOne({ id: { $eq: id } }));

    return user;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

module.exports = {
  findByUserName,
  findById,
};