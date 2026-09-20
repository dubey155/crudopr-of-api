const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])
dns.setDefaultResultOrder("ipv4first")


require("dotenv").config()
console.log("LENGTH:", process.env.MONGO_URI?.length)
console.log("FIRST 30 CHARS:", JSON.stringify(process.env.MONGO_URI?.slice(0, 30)))
console.log("LAST 20 CHARS:", JSON.stringify(process.env.MONGO_URI?.slice(-20)))

const express = require("express")
const { connectMongodb } = require("./database")

const { logreqres } = require("./middlewares/middleware")

const app = express()
const PORT = process.env.PORT || 8000

const Routing = require("./routes/op_route")

// connection
connectMongodb(process.env.MONGO_URI)

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logreqres("log.txt"))
app.use(express.static("views"))

// routes
app.use("/api/users", Routing)

app.listen(PORT, () => console.log(`server is started at the port ${PORT}`))
