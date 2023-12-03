const express = require("express");
const app = express();
const users = [];


app.use(express.json());

//app.listen(PORT, () => {
  //console.log(`Server is listening on port ${PORT}`);
//});



app.get('/users', (req, res) => {
  res.json(users)
});

app.post('/users', (req, res) => {
    const user = { name: req.body.name, password: req.body.password}
    users.push(user);
    res.status(201).json(user)
  });

  app.listen(5000)

  
