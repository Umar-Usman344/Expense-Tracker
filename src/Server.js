const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path:'./config/config.env'})

const app=express();
app.get('/',(req,res)=>res.send('HELLO'))
const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))