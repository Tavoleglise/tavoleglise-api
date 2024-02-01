const express = require("express");
const bodyParse = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3977;

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.get("/pruebas", (req, res) => {
  res
    .status(200)
    .send({ message: "Accion de pruebas en el servidor de NodeJS" });
});

app.post("/welcome", (req, res) => {
  const { name } = req.body;
  res.status(200).send({ message: `Welcome to the API ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
