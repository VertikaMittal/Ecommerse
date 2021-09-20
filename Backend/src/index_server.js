const express=require('express');
const bodyParser=require('body-parser');
const env=require('dotenv');

const userRoutes=require('./routes/user')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
    
}).then(()=>{
    console.log('Database connected');
});


env.config();
const app=express();


app.use(bodyParser());
app.use('/api',userRoutes);
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         messase:"Hello from server"
//     });
// });
// app.post('/data',(req,res)=>{
//     res.status(200).json({
//         messase:req.body
//     });
// });
app.listen(process.env.Port,()=>{
    console.log(`Server is running on port ${process.env.Port}`);
})