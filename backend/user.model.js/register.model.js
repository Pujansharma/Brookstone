const mongoose=require("mongoose")

//user schema
const userSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email: {type:String,required:true},
    pass: {type:String,required:true},
},{
    versionKey:false
})

const UserModel=mongoose.model("brookstoneusers",userSchema)

module.exports={
    UserModel
}