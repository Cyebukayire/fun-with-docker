const express = require ('express')
const mongoose = require("mongoose")
const app = express()
const PORT = 3000
const routes = require('./routes')

// Connect to MongoDB 
mongoose
    .connect("mongodb://localhost:27017/learning", {useNewUrlParser: true})
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)

        app.listen(PORT, () => {
            console.log("Server started...")
            console.log(`Listening on PORT ${PORT}`)
        })
    })