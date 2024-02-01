const express = require("express");
const bodyParse = require("body-parser");
const connectDB = require("./db/db"); // Import the database module

const app = express();
const PORT = process.env.PORT || 3977;

connectDB();

/*const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

const newUser = new User({
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
});

newUser
  .save()
  .then(() => console.log("User saved"))
  .catch((err) => console.error("Could not save user", err));

User.findOne({ name: "John Doe" })
  .then((user) => console.log(user))
  .catch((err) => console.error(err));

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());*/

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
  console.log(`Server running on port ${PORT}`);
});
