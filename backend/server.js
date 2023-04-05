const express = require("express");
const cors = require("cors");
const app = express();


// Middlware
app.use(cors());

app.get("/", (req, res) => {
    res.send("Listening..");
  });

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));