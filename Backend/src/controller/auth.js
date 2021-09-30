const User=require('../models/user');
const jwt=require('jsonwebtoken');
const {validationResult}=require('express-validator');

exports.signup=(req,res)=>{

    // const errors=validationResult(req);
    // return res.status(400).json({
    //     errors:errors.array()
    // })


    User.findOne({email:req.body.email}).exec((err,user)=>{
        
        if(user) return res.status(400).json({

            message:'User already exist'
        });

        const{
            firstName,
            lastName,
            email,
            password
        }=req.body;
        const _user=new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        });

        _user.save((err,data)=>{
            console.log(data);
            if(err){
                return res.status(400).json({
                    message:'Somethng went wrong'
                });
            }
            console.log(data);
            if(data){
                return res.status(201).json({
                    message:'User created successfully'
                });
            }

        })

    })
}



exports.signin=(req,res)=>{
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err) return res.status(400).json({
            err
        });

        if(user){
                if(user.authenticate(req.body.password)){
                    const token=jwt.sign({_id:user._id,role:user.role},process.env.jWT_SECRETKEY,{expiresIn:'1h'});
                    const{
                        firstName,
                        lastName,
                        email,
                        role,
                        fullName
                    }=user;
                    return res.status(200).json({
                       token,
                       user:{
                        firstName,
                        lastName,
                        email,
                        role,
                        fullName
                       }
                    });

                }
                else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    });
                }
            }
        else{
            return res.status(400).json({
                message:'Somethng went wrong'});
            }

      

    })
}
