const express = require("express");
const bodyParser=require('body-parser');

const init=(data) => {
    const app = express();
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', (req, res)=>{
        return res.send('home')
    });

    app.get("/home", (req, res) => {
        res.render("home");
    });

    app.get("/menu", (req, res) => {
        console.log("Menu loaded");
        res.render('menu'); // relative route, no need for ./all
       // res.render('./page.not.found')

    });

    app.get("/orders", (req, res) => {
        console.log("Orders loaded");
        res.render('orders'); 
    });

    app.get("/profile", (req, res) => {
        console.log("Your profile");
        res.render('profile');
    });

    app.get("/restaurants", (req, res) => {
        return data.restaurants.GetAll()
            .then((restaurants)=>{
                console.log("restaurants");
                return res.render('restaurants/all', {
                    context: restaurnats,
                });
            })
    });

    app.post('/restaurants', (req, res)=> {
        const restaurant=req.body;
        return data.restaurants.create(restaurant)
            .then((dbReataurant)=>{
                return res.redirect('/restaurants/'+dbReataurant.id)
            });
    });


    app.get("/register", (req, res) => {
        console.log("reg");
        res.render('../views/main/register.pug'); 
    });

    app.get("/login", (req, res) => {
        console.log("login");
        res.render('../views/main/login.pug'); 
    });
    return Promise.resolve(app);
};

// require('./routes/server.routes')(app);
// require('./routes/api.routes').attach(app);

//app.listen(3000, console.log("Server works!"));

module.exports={
    init,
};
