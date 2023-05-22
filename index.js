const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainRouter = require('./Routes/mainRoutes');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mainRouter);

mongoose
.connect('mongodb://127.0.0.1:27017/dailyReport')   //if mongodb://localhost:27017, will throwing error 
.then(()=> {
    console.log('connection established')
})
.catch((err)=> {
    console.log('err',err)
})

app.listen(5002, (req,res)=> {
console.log("Server is Running")
})
