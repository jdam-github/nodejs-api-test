import express from "express"
import {request , response} from "express"


const app = express()
app.use(express.json())

app.get("/test" , (req , res) =>{
    res.send("Hello API TESTING")
})

app.post("/users", (req , res)=>{
    
    console.log("Body: ", req.body); // Now this will print correctly

    // Extract values from req.body
    const { username, password } = req.body;

    // Validate request body
    if (!password || !username) {
        return res.sendStatus(400);
    }

    res.status(200).json({ userId: 0 });
    // res.status(200).json({userId:0})
} );

export default app ; 
// module.exports [app];