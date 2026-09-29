require("dotenv").config();

const express=require('express');
const ejs=require('ejs');
const path=require('path');

const DbConnection=require('./src/config/dbcon.js');


const app=express();

//db connection
DbConnection();

app.set('view engine','ejs');
app.set('views','./src/views');

//create a json
app.use(express.json());

app.use(express.urlencoded({extended:true}));
//create Static folder
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

// Home Route
const homeRoute=require('./src/router/home.route.js');
app.use(homeRoute);

// Product Route
// const productRoute = require('./src/router/product.route.js');
// app.use(productRoute);

// Student Route
const studentRoute=require('./src/router/student.route.js');

app.use('/api',studentRoute);

const productRoute=require('./src/router/product.route.js');
app.use(productRoute);

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})