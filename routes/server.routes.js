const attach=(app)=>{
    app.get("/home", (req, res) => {
        console.log("Home");
        res.redirect("/404");
    });

    app.get("/menu", (req, res) => {
        console.log("Menu loaded");
        res.render('all'); // relative route, no need for ./all
       // res.render('./page.not.found')

    });
};
module.exports=attach;
