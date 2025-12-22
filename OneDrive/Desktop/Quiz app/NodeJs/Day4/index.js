const express = require("express");

const app = express()



const logger = require("./Middleware/logger");

const auth = require("./Middleware/auth")
const error = require("./Middleware/error");
const authroute = require("./Routes/authroute");
app.use(express.json())

app.use(logger);

app.use("/api/auth",authroute);

app.get("/profile",auth, (req,res)=>{
    res.json({
        success: true,
        message: "Profile data"
    });
});

app.use(error);

app.listen(3000,()=>{
    console.log("server running on port 3000")
})