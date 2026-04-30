const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let customers = [];
let nextId = 1;

// GET /customers – get all customers
app.get("/customers", (req, res) => {
  res.json(customers);
});

// POST /customers – add new customer
app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const customer = {
    id: nextId++,
    name,
    email,
    phone,
  };

  customers.push(customer);
  res.status(201).json(customer);
});

// DELETE /customers/:id – delete customer
app.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = customers.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Customer not found" });
  }

  customers.splice(index, 1);
  res.json({ deleted: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});