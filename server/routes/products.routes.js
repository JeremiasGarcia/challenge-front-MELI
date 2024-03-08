import express from "express";
import { getProducts, getProduct } from "../controllers/products.controller.js";

const app = express();

app.get("/", (req, res) => {
  res.json("Bienvenido!!");
});

app.get("/api/items", async (req, res) => {
  const query = req.query.q;
  try {
    const data = await getProducts(query);
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Hubo un error al obtener los datos." });
  }
});

app.get("/api/items/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const data = await getProduct(itemId);
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Hubo un error al obtener los datos." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at ${port}...`));
