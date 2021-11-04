const connection = require('../../models/connection/mongodb');
const { ObjectId } = require('mongodb');

const findProjectsByUserId = async (id) => {
  try {
    const user = await connection()
      .then((db) => db.collection('projects')
      .find({ userId: { $eq: ObjectId(id) } }).toArray());

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
