const express = require("express");
const app = express();

app.use(express.json());

app.post("/register", function(req,res){
    const {name,email,password} = req.body;
    console.log(req.body);
    if(name === "" || email === ""|| password === ""){
        return res.status(400).json({message :"bad request"});
    }
    else{
        res.status(201).json({message:"created successfully",
            user: {name,email},
        })
    }

    
   
})


app.post("/login", function(req,res){
      const {email,password} =req.body;
      console.log(req.body);
      if(!email || !password ){
        return res.status(400).json({
            success: false,
            message :" missing fields"
        })
      }

    //   res.status(200).json({
    //     message: "logged in successfully",
    //     user:{email}
    //   })
    

    res.status(201).json({
        "success": true,
        "message":"Login successfully"
    })
      
      
})

app.listen(3030,()=>{
    console.log("server running on port 3030")
})