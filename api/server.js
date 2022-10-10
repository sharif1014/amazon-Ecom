import cors from "cors";
import express from "express";
import data from './data.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
//app.use(express.json())

app.get("/api/products", (req, res) => {
    res.status(200).json(data.products);
});
app.get("/api/product/:id", (req, res) => {
    const product = data.products.find((x)=>x._id === req.params.id);
     if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
});
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});
