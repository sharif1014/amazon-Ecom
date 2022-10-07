import express from "express";

const server = express();
const PORT = process.env.PORT || 5000;



server.get("/", (req, res) => {
    res.send('Welcome to home page');
});
server.get("/product/:id", (req, res) => {
    res.send('Welcome to single product page');
});
server.listen(PORT, (req, res) => {
    console.log(`server is running at ${PORT}`)
});
