const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');


app.use('/candidate',candidateRoutes);
app.use('/user',userRoutes);


app.listen(PORT,()=>{
    console.log('listing on the port 3000');
    
});

