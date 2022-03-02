const express = require ('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/users", (req, res) => {
    res.send({
        id: 1,
        name: "Peace"
        // users: [
        //     [
        //         id= 1,
        //         name= "Peace"
        //     ],
        //     [
        //         id= 2,
        //         name= "Musa"
        //     ],
        //     [
        //         id= 3,
        //         name= "Gedeon"
        //     ],
        // ]
    })
})