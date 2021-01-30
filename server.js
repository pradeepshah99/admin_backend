const express = require('express');
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.port;
const host = process.env.host;

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// now making connection with the database

let url = "mongodb://localhost:27017/admin_DB";

mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:true});

let database = mongoose.connection;

database.once('open', (req, res)=>
{
    console.log("Database has been connected");
})



app.listen(host, port, ()=>
{
    console.log(`server is running on the port : http://${host}:${port}`);

})