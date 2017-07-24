const async=()=>{
    return Promise.resolve(); 
};

const config=require('./config');

async()
    .then(()=>require('./db/db').init(config.connectionString))
    .then((db)=>require('./data/data').init(db))
    .then((data)=>require('./app/app').init(data))
    .then((app)=>{
        app.listen(config.port, console.log(`Server works at: ${config.port}!`));
    });


