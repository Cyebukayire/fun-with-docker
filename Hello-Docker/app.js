const express = require ('express')
const mongoose = require("mongoose")
const app = express()
const PORT = 3000

// Connect to MongoDB 
mongoose
    .connect("mongodb://localhost:27017/learning", {useNewUrlParser: true})
    .then(() => {
        const app = express()
        app.get('/', (req, res) => {
            res.send("Hello, Customer!")
        });

        app.listen(PORT, () => {
            console.log("Server started...")
            console.log(`Listening on PORT ${PORT}`)
        })
    })