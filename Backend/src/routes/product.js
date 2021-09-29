const express=require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');

// const { addCategory, getCategories } = require('../controller/category');
const router=express.Router();
const Product=require('../models/product')
router.post('/product/create',requireSignin,adminMiddleware,(req,res)=>{
    res.status(200).json({message:'Hello'})
});



module.exports=router;