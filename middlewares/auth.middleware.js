const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const authenticate = async(req,res,next)=>{
    const token = req.header('Authorization').split(" ")[1];
    if(!token) return res.status(401).json({error:"Access  Denied. No  Token Provided"});
        
try {
    const verified = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(verified.id);
    if(!req.user) throw new Error("User not found")
        next()
} catch (error) {
    res.status(400).json({
        error:"Invalid Token"
    })
}
}
module.exports = authenticate;