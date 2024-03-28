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
});


app.get("/ig/:username", (req, res) => {


    let { username } = req.params;
    const instaData = require("./views/data.json");
    const data = instaData[username];
    console.log(instaData);
    if(data){
        res.render("insta.ejs", { data });
    }else{
        res.render("error.ejs",{data});
    }
    console.log(data);
    const friends = ["hariom", "gaurisha", "shreesha", "amratansh"];
    const followers = Math.floor(Math.random() * 1000000) + 1;
    const no_Followers = 100000;
    // res.send(`This is ${username}'s instagram Homepage`);
    // res.render("facebook.ejs", {data:instaData}[username]);
    
});

app.listen(port, () => {

    console.log(`Listening on port ${port}`);

});
