const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const PRODUCTION_DB_URL = process.env.PRODUCTION_DB_URL;
const PRODUCTION_DB_NAME = process.env.PRODUCTION_DB_NAME;

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(PRODUCTION_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(PRODUCTION_DB_NAME);
    return db;
    }));

module.exports = connection;
