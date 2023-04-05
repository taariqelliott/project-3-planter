const mongoose = require("mongoose")
const { DATABASE_URL } = process.env

// Database connection: 
// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error))
  
  
  module.exports = {
    Blogs: require("./Blogs")
  }
  