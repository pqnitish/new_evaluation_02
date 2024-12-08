const express = require("express");
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const router = express.Router();
router.post("/register",async(req,res,next)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: "User Registered successfully"
        });
    } catch (error) {
        next(error)
    }
})
router.post("/login",async (req,res,next)=>{
try {
    const {username,password} = req.body
    const user = await User.findOne({username});
    if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(401).json({
            error: "invalid credential"
        })

    }
} catch (error) {
    next(error)
}
})