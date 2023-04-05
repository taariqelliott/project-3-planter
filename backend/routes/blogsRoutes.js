const router = require('express').Router()
const { blogsCtrl } = require('../controllers') //all of our methods inside of controllers/index.js 

// ROUTES - METHODS // 
router.get('/', blogsCtrl.getBlogs)
router.post('/', blogsCtrl.createBlogs)
router.put('/:id', blogsCtrl.updateBlog)
router.delete('/:id', blogsCtrl.deleteBlog)


module.exports = router