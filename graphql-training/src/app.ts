import * as express from "express"

const app = express()

const port = 6000

app.get('/', (req, res) => {
    res.send("Test with typescript")
})

app.listen(port, () => {
    return console.log("Node with typescript is running");
})