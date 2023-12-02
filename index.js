const express =  require('express')();
const app = express();
const PORT = 5000;
const users=[{name : 'Name'}]

app.use(express.json())


app.listen(5000)

app.get('/users', (req, res) =>{
     res.json(users)({
        
     })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
        
    }

    res.send({
        thisrt: `👕 with your ${logo} and ID of ${id}`, 
    })

});
