const mongoose = require("mongoose")

// Models:
// this is just a sample model for a blog post
const BlogsSchema = new mongoose.Schema({
	name: String,
	image: String, 
	title: String,
})

const Blogs = mongoose.model("Blogs", BlogsSchema)

module.exports = Blogs