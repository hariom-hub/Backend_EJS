const express = require('express');

const app = express();


const path = require('path');

const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));  //path is a package here

app.get("/", (req, res) => {

    res.render("home.ejs");
});


app.get("/rolldice", (req, res) => {

    res.render("rolldice.ejs");
})


app.get("/fb/:username/followers", (req, res) => {

    let { username,followers } = req.params;

    // res.send(`This is ${username}'s instagram Homepage`);
    res.render("facebook.ejs", { username,followers });
})
app.listen(port, () => {

    console.log(`Listening on port ${port}`);

});
