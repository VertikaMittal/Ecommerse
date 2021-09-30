const express=require('express');
const env=require('dotenv');

const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');

env.config();


const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Vertika:${process.env.MONGO_DB_PASSWORD}@cluster0.pz6zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
    
}).then(()=>{
    console.log('Database connected');
});



const app=express();


app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.listen(process.env.Port,()=>{
    console.log(`Server is running on port ${process.env.Port}`);
})