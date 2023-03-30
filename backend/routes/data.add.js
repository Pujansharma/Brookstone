const express=require("express")
const dataRouter=express.Router()
const {dataModel}=require("../user.model.js/data.model")

dataRouter.post("/add", async (req, res) => {
    try {
        const data=await dataModel.insertMany(req.body);
        // await data.save();

        console.log(req.body)
        res.status(200).send({ "msg": "A new Note has been added" })

    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})
dataRouter.get("/get", async(req,res)=>{
    let query=req.query;
    try {
        const data= await dataModel.find(query)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


// const items = ['apple', 'banana', 'orange', 'grape', 'mango'];

dataRouter.get('/search/:key', async(req, res) => {
    // console.log(req.params.key)
//   const query = req.params.query
//   let name=(req.query.name)
//   if(name){
    let filteredItems = await dataModel.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    });
        
// 
  
  res.json(filteredItems);
res.send(filteredItems)
});








module.exports={dataRouter}