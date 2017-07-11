const express = require("express");

const app = express();

require('./routes/api.routes')(app);
require('./routes/server.routes')(app);



app.listen(3000, console.log("Server works!"));

