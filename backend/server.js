// Dependancies
const express = require("express");

// get .env variables
require("dotenv").config() 
const app = express();
// pull PORT from .env
const { PORT } = process.env
const cors = require("cors");

// Middlware
app.use(cors()); // makes sure that we don't get cors errors when our react app makes a request to our express app
app.use(express.urlencoded({extended: true})) //req.body
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Listening..");
//   });

 
// import all available routes in our /routes/index.js 

const routes = require('./routes/index')
app.use('/', routes) 

// const plantRoutes = require('./routes/plantIndex')
// app.use('/', plantRoutes)  

// catch route if it doesn't match to anything we will send this response 
app.use((req, res) => {
	res.status(404).json({message: "NOT A PROPER ROUTE"})
})

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));