/* eslint linebreak-style: ["error", "windows"]*/
const port=3000;
const connectionString='mongodb://localhost:27017/RestaurantOnline';

const sessionSecret = 'Purple Unicorn';

module.exports={
    port,
    connectionString,
    sessionSecret,
};
