const express = require('express')
const todoCtrl = require('../controllers/todo_controller')

const router = express.Router()

router.post('/api/v1/todo', todoCtrl.create)
router.get('/api/v1/todo', todoCtrl.read)
router.patch('/api/v1/todo/:id', todoCtrl.update)
router.delete('/api/v1/todo/:id', todoCtrl.deleteTodo)
router.get('/api/v1/todo/:id', todoCtrl.getTodo)

  
module.exports = router