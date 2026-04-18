const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mydatabase.c3uy8suq85rv.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "admin35020",
  database: "portfolio"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to RDS");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name,email,message) VALUES (?,?,?)";
  db.query(sql, [name, email, message], (err) => {
    if (err) throw err;
    res.send("Data Saved");
  });
});

app.listen(3000, () => console.log("Server running"));