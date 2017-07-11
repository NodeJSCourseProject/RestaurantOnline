const attach=(app)=>{
    app.get("/home", (req, res) => {
        console.log("Home");
        res.redirect("/404");
    });

    app.get("/menu", (req, res) => {
        console.log("Menu ");
        res.send(`<h1> Menu <h1>
        <ul>
            <li><a href ="/main">  Go to Main Courses </a> </li>
            <li></li>
            <li></li>
        </ul>            `);

    });
};
module.exports=attach;
