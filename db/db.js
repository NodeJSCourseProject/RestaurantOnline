const { MongoClient } = require('mongodb');

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'RestaurantOnline';

const connectionString = `${protocol}/${server}/${databaseName}`;
const connectionPromise = MongoClient.connect(connectionString);

const init = (connectionString) => {
    return MongoClient.connect(connectionString);
};

module.exports = { init };

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;




// connectionPromise.then((db) => {
//     return db;
// }).then((db) => {
//     db.collection('Names')
//         .find({})
//         .toArray()
//         .then((err, result) => {
//             console.log(result);
//         });
// });

// connectionPromise.then((db) => {
//     console.log(db);
// });

// MongoClient.connect(connectionString)
// .then((db) => {
//     db.collection()
//         .insert({
//             firstName: 'Ivan',
//             lastName: 'Kolev',
//             age: 22
//         })
//         .then((result) => {
//             console.log(result);
//         });
// })
// .catch((error) => {
//     console.log(error);
// })