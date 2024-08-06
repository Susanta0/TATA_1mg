const express = require("express")
const router=express()

router.get("/", (req, res)=>{
    res.send("This is Admin Home Page")
})

module.exports = router