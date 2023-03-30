const express=require("express")
const{connection}=require("./contedtodatabase/config")
const {userRouter}=require("./routes/register")
const {dataRouter}=require("./routes/data.add")
const app=express();
const cors=require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json());
app.use("/users",userRouter)
app.use("/data",dataRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log({"mssg":"conneted to database"})
    } catch (error) {
        console.log({error:"something went wrong"})
    }
    console.log(`server is running on port ${process.env.port}`)
})





