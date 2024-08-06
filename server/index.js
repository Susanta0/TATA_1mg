const express = require("express")
const cors=require("cors")
const connected = require("./src/config/db")
const userRouter = require("./src/router/Users/user.router")
const collagenRouter = require("./src/router/collagen.router")
const server = express()
require("dotenv").config()
const PORT= process.env.PORT || 8000


server.use(cors())
server.use(express.json())
// Frontend Home Page
server.get("/", (req, res)=>{
    res.send("This is the Home Page")
})

// User Router
server.use("/user", userRouter)

server.use("/product", collagenRouter)
// Admin Home Page
// const adminRouter= require("./src/router/Admin/admin.js")
// server.use("/admin", adminRouter)

// // Admin Page
// const adminPage=require("./src/router/Admin/page.js")
// server.use("/admin/page", adminPage)

// server port
server.listen(PORT, async()=>{
    try {
        await connected
        console.log(`server running on ${PORT} also connected Db`);
        
    } catch (error) {
        console.log("something wrong");
        
    }
})