const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
// const PRODUCTION_DB_URL = process.env.PRODUCTION_DB_URL;
// const PRODUCTION_DB_NAME = process.env.PRODUCTION_DB_NAME;

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DATABASE_NAME);
    return db;
    }));

module.exports = connection;
