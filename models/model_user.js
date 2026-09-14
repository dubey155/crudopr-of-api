const mongoose = require("mongoose")

//schema for mongodb crud operations 
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true }, //unique true means no email should repeat 
  jobTitle: { type: String },
  gender: { type: String }
})

const User = mongoose.model("user", userSchema)
module.exports = { User }
