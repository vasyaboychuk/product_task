const express=require('express');
const mongoose=require('mongoose')
require('dotenv').config();
const cors = require('cors');

const config = require('./config/config');

const productRouter=require('./router/product.router');
const commentRouter = require('./router/comment.router');


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/product',productRouter);
app.use('/comment',commentRouter);

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message: err.message || 'unknown error',
        status: err.status || 500,

    });
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.listen(config.PORT, ()=>{
    mongoose.connect(config.MONGO_URL)
    console.log(`Server listen port: ${config.PORT}`)
})
