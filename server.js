const express = require("express")
const { connectMongodb } = require("./database")

const { logreqres } =require("./middlewares/middleware")

const app = express()
const PORT = 8000

const Routing = require("./routes/op_route")

//connection
connectMongodb("mongodb://127.0.0.1:27017/usersdb")
//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logreqres("log.txt"))
//routes
app.use("/api/users", Routing)

app.listen(PORT, () => console.log(`server is started at the port ${PORT}`))