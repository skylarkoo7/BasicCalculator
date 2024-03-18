const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get('/' , function(req,res){
    res.render("index", {age:12});
})

app.get('/profile' , function(req,res){
    res.render("contact");
})

app.listen(3000);