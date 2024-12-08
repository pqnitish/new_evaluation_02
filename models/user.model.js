const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  borrowedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});
// Hash password before saving
userSchema.pre("save",async function(next){
    if(!this.isDirectModified('password'))
        return next();
    this.password = await bcrypt.hash(this.password,5)
    next();
});
module.exports = mongoose.model("User",userSchema);
