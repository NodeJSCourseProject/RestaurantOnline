const express = require("express");

const app = express();
app.set('view engine', 'pug');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes/server.routes')(app);
require('./routes/api.routes').attach(app);
//let apiRouter=require('./routes/api.routes').getRouter();
//app.use('/api', apiRouter);
app.listen(3000, console.log("Server works!"));
