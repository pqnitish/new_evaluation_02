const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db.js");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3008
app.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`server is running on port: ${PORT} and connected to database`);
        
    } catch (error) {
        console.log(`error in connecting database ${error}`);
        
    }
});
