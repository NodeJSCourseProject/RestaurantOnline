require('./db').init()
    .then((db)=>require('./data').init(db))
    .then((data)=>require('./app').init(data))
    .then((app)=>{
        const app = express();
        require('./routes/server.routes')(app);
        require('./routes/api.routes').attach(app);
        app.listen(3000, console.log("Server works!"));
    });


