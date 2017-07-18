const attach=(app)=>{
    app.get("/home", (req, res) => {
        console.log("Home");
        res.redirect("/404");
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
};
module.exports=attach;
