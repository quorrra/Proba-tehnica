const express = require('express')
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan= require('morgan')
const bodyParser = require('body-parser')

const AuthRoute = require('./routes/Auth')
const routes = require('./routes/poll')


mongoose.set("strictQuery", false);

app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json())
app.use(cors());
app.use(morgan('dev'))
app.use('/api', AuthRoute)
app.use('/polls', routes);



mongoose
  .connect("mongodb://localhost:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(3000, () => {
  console.log("App listen on port", 3000);
});

