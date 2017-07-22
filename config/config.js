const port=3000;
const connectionString='mongodb://localhost:27017/RestaurantOnline';

// const protocol = 'mongodb:/';
// const server = 'localhost:27017';
// const databaseName = 'RestaurantOnline';

// const connectionString = `${protocol}/${server}/${databaseName}`;
// const connectionPromise = MongoClient.connect(connectionString);

module.exports={
    port,
    connectionString,
};