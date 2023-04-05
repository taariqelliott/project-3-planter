const router = require('express').Router()
const plantsMainRoute = require('./plantsRoutes') // import plants route methods 

// URL DIRECTORY 
router.use('/plants', plantsMainRoute)

module.exports = router