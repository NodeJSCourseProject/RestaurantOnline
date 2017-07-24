const attach=(app)=>{
    app.get("/", (req, res) => {
        res.render("landing");
    });

    app.get("/home", (req, res) => {
        console.log("landing loaded");
        res.render("landing");
    });

    app.get("/menu", (req, res) => {
        console.log("Menu loaded");
        res.render('home'); // relative route, no need for ./all
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
        console.log("restaurants");
        res.render('restaurants'); 
    });

    app.get("/register", (req, res) => {
        console.log("reg");
        res.render('../views/main/register.pug'); 
    });

    app.get("/login", (req, res) => {
        console.log("login");
        res.render('../views/main/login.pug'); 
    });
};
module.exports=attach;
