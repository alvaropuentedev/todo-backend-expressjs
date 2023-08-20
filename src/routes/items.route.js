const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items.controller')

router.get('/api/items', itemsController.getItems)
router.get('/api/items/:id', itemsController.getItemById)

module.exports = router