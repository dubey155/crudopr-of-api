const{User} = require("../models/model_user")

async function handlegetallusers(req,res){
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function handlegetuserbyid(req,res){
  try {
      const user = await User.findById(req.params.id)
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ message: "User not found" })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}

async function handleUpdateuserbyid(req,res){
  try {
      const body = req.body
      const user = await User.findByIdAndUpdate(
        req.params.id,
        body,
        { new: true, runValidators: true }
      )
      if (user) {
        res.json({ status: "success", user })
      } else {
        res.status(404).json({ message: "User not found" })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}
async function handleDeleteuserbyid(req,res){
  try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (user) {
        res.json({ status: "success", message: "User deleted successfully" })
      } else {
        res.status(404).json({ message: "User not found" })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}
async function handleCreateanewuser(req,res){
    const body = req.query
  if(
    !body||
    !body.firstName||
    !body.lastName||
    !body.email||
    !body.jobTitle||
    !body.gender
  )
  {return res.status(400).json({message:"All fields are required"})}
    try {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName || "",
      email: body.email,
      jobTitle: body.jobTitle || "",
      gender: body.gender
    })
    return res.status(201).json(result)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" })
    }
    return res.status(500).json({ message: error.message })
  }
}
module.exports = {
  handlegetallusers,
  handlegetuserbyid,
  handleUpdateuserbyid,
  handleDeleteuserbyid,
  handleCreateanewuser
}
