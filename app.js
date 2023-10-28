const express = require("express")
const app = express()
const PORT = 3001

app.get("/hello", (req,res) => {
    res.send({data: "Hello there!"});
});

app.listen(PORT, () => {
    console.log("Server running");
});