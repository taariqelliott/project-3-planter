const router = require('express').Router()
const { plantsCtrls } = require('../controllers') //all of our methods inside of controllers/index.js 

// ROUTES - METHODS // 
router.get('/', plantsCtrls.getPlants)
router.get('/', plantsCtrls.getDetails)


module.exports = router