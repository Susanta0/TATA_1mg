const {Schema, model}= require("mongoose")

const collagenSchema= new Schema({
    image:{type: [String], required: true},
    title:{type: String, required: true},
    dis:{type: String, required: true},
    date_time:{type: String, required: true},
    cutPrice:{type: Number, required: true},
    off:{type: String, required: true},
    price:{type: Number, required: true},
})

const collagenModel= model("collagen", collagenSchema)

module.exports=collagenModel
