const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    },
    cartItems:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:'Use', required:true},
            quality:{type:Number,default:1},
            price:{type:Number,required:true}
        }
    ]
 
},{timestamps:true});



module.exports=mongoose.model('Cart',cartSchema);