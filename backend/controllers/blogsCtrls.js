const db = require('../models')
console.log(db)

const getBlogs = (req, res) => {
	db.Blogs.find({})
	.then((foundBlogs) => {
		if(!foundBlogs) {
			res.status(404).json({message: "Cannot find Blogs"})
		} else {
			res.status(200).json({data: foundBlogs})
		}
	})
}

const createBlogs = (req, res) => {
	db.Blogs.create(req.body)
	.then((createdBlog) => {
		if(!createdBlog) {
			res.status(404).json({message: "Cannot create Blog"})
		} else {
			res.status(201).json({data: createdBlog})
		}
	})
}

const updateBlog = (req, res) => {
	db.Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true})
	.then((updatedBlog) => {
	if(!updatedBlog) {
			res.status(400).json({message: "Cannot update Blog"})
		} else {
			res.status(200).json({data: updatedPerson, message: 'updated Blog'})
		}
	})
}

const deleteBlog = (req, res) => {
	db.Blogs.findByIdAndDelete(req.params.id)
	.then((deletedBlog) => {
		if(!deletedBlog) {
			res.status(400).json({message: "Could not delete Blog"})
		} else {
			res.status(200).json({data:deletedBlog, message: 'deleted Blog'})
		}
	})
}

module.exports = {
	getBlogs,
	createBlogs,
	updateBlog,
	deleteBlog
}
