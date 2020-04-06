const express = require('express');


const app = express();

//static files
app.use(express.static('logis'));

//Get the home page
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

//Post Form
app.post('/', (req, res) =>{
   
});





//set port and start server
const PORT = 5000; 
app.listen(PORT, ()=> console.log(' </> '));