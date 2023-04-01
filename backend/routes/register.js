const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../user.model.js/register.model")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

//registration
userRouter.post("/register",async(req,res)=>{
    const {firstname,lastname,email,pass}=req.body
    try{
        const user=await UserModel.find({email})
        if(user.length>=1){
            // alert("user is allready register please log in!")
            res.status(200).send({"msg":"user is allready register please log in!"})
        }else{
            bcrypt.hash(pass, 5, async (err, hash) => {
                const user=new UserModel({firstname,lastname,email,pass:hash})
                await user.save()
                res.status(200).send({"msg":"Registration has been done!"})
            });
        }
       
        
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

//login(authentication)
userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(pass,user.pass, (err, result) => {
                if(result){
                    res.status(200).send({"msg":"Login successfull!","token":jwt.sign({"userID":user._id},"masai")})
                } else {
                    res.status(400).send({"msg":"Wrong Credentials"})
                }
            });
        }
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})


userRouter.get("/get", async(req,res)=>{
    let query=req.query;
    try {
        const data= await UserModel.find(query)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
// userRouter.patch("/update/:id",async(req,res)=>{
//     const ID=req.params.id;
//     const pass=req.body;
    
//     try {
//         bcrypt.hash(pass, 5, async (err, hash) => {
//             const user= new UserModel({pass:hash})
//         let data= await UserModel.findOneAndUpdate({email:ID},user);
//         res.status(200).send({"mssg":"password was updateted"})
//     });
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })


module.exports={
    userRouter
}