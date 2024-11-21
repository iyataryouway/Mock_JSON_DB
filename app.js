const express = require('express');
const ejs = require('ejs');
const userRoute = require('./routes/users.js');
require('dotenv').config();

//app object is a new instance of express
const app = express();
const PORT = process.env.PORT || 9600;

//View Engine

app.set("view engine", "ejs");
app.set("views", "./views");

//Middleware for serving static files
app.use(express.static('public'));
//Express router file
app.use(userRoute);

//Starting server
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});