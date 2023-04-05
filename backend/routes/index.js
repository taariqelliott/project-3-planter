const router = require('express').Router()
const blogsRoute = require('./blogsRoutes') // import blogs route methods 

// URL DIRECTORY 
router.use('/blogs', blogsRoute)

module.exports = router