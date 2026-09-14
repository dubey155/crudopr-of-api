const mongoose = require("mongoose")

const connectMongodb = async (url) => {
  try {
    await mongoose.connect(url)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log("MongoDB connection error:", err)
  }
}

module.exports = { connectMongodb }