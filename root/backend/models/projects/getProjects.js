const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const findProjectsByUserId = async (id) => {
  const idToString = id.toString();
  try {
    const user = await connection()
      .then((db) => db.collection('projects')
      .find({ userId: { $eq: idToString } }).toArray());
    return user;
  } catch (_err) {
    return {
      message: 'Unexpected error. Please try again.'
    }
  }
}

module.exports = {
  findProjectsByUserId,
}
