const express=require('express');
const env=require('dotenv');
const pass=process.env.MONGO_DB_PASSWORD;

const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Vertika:pass@cluster0.pz6zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
    
}).then(()=>{
    console.log('Database connected');
});


env.config();
const app=express();


app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.listen(process.env.Port,()=>{
    console.log(`Server is running on port ${process.env.Port}`);
})