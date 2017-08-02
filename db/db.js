const { MongoClient } = require('mongodb');

const protocol = 'mongodb:/';
const server = '52.58.91.175:27017';
const databaseName = 'RestaurantOnline';

const connectionString = `${protocol}/${server}/${databaseName}`;
const connectionPromise = MongoClient.connect(connectionString);

const init = (connectionString) => {
    return MongoClient.connect(connectionString);
};

module.exports = { init };
