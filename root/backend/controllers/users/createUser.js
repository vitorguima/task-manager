const connection = require('../../models/connection/mongodb');

const createUser = async (data) => {
  try {
    const newUser = await connection()
      .then((db) => db.collection('users').insertOne({ ...data, role: 'user' }));

    return newUser;
  } catch (_err) {
    return null;
  }
}

module.exports = createUser;