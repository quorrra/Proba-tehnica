const mongoose = require('mongoose');
const express = require('express');
const morgan= require('morgan')
const bodyParser = require('body-parser')
const app = express();
const bcrypt= require('bcrypt')
const session = require('express-session');
const flash = require('express-flash');
const express = require('express');


app.use(express.json());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const db = mongoose.connection

mongoose
  .connect("mongodb://localhost:27017/testdb", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

db.on('error', (err)=>{
  console.log(err)
})

app.use(express.urlencoded({extended: false}))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(flash())


  
