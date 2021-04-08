const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express()

app.use(bodyParser.json());

//importing routes
const postsRoute = require('./routes/posts');
const blogRoute = require('./routes/blogs');

app.use('/blogs',blogRoute);
app.use('/posts',postsRoute);

app.get('/',(req,res) => {
    res.send('We are on home');
})

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},()=>{
    console.log('connected to DB!')
});

app.listen(process.env.PORT || 3000);