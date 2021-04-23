const express = require("express");
const path = require("path"); 
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});

const port = process.env.PORT || 8000;

app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res)=>{
    res.status(200).render('index.ejs');
})

app.get('/cart', (req, res)=>{ 
    res.status(200).render('cart.ejs');
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});