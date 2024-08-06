const {Router} = require("express")
const collagenModel = require("../models/Collagen _supplement.shema")
const collagenRouter = Router()


collagenRouter.get("/showcollagen", async (req, res)=>{
    const {product}=req.body
    try {
        const productDetails= await collagenModel.find({product})
        return res.status(201).json({message:"Show all products", productDetails})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

collagenRouter.post("/addproduct", async (req, res)=>{
    const {image, title, dis, date_time, cutPrice, off, price}=req.body
    if (!image || !title || !dis || !date_time || !cutPrice || !off || !price) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const productDetails= new collagenModel({image, title, dis, date_time, cutPrice, off, price})
        await productDetails.save()
        return res.status(201).json({message:"product details added successfully"})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

collagenRouter.patch("/editproduct/:id", async(req, res)=>{
    const {image, price, dis, }= req.body
    try {
        const editproduct= await collagenModel.findByIdAndUpdate(req.params.id,{image, price, dis})
        await editproduct.save()
        return res.status(201).send({message:"productDetails updated successfully"})
    } catch (error) {
        return res.status(400).send(error)
    }
})

collagenRouter.delete("/deleteproduct/:id", async(req, res)=>{
    try {
        const deleteproduct= await collagenModel.findByIdAndDelete(req.params.id)
        return res.status(201).send({message:"productDetails delete successfully",deleteproduct})
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=collagenRouter