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
module.exports={dataRouter}