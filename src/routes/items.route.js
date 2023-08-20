const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items.controller')

router.get('/api/items', itemsController.getItems)
router.get('/api/items/:id', itemsController.getItemById)
router.post('/api/items', itemsController.createItem)
router.put('/api/items/:id', itemsController.updateItem)
router.delete('/api/items/:id', itemsController.deleteItem)

module.exports = router