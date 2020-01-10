const express = require('express')
const todoCtrl = require('../controllers/todo_controller')

const router = express.Router()

router.post('/', todoCtrl.create)
router.get('/', todoCtrl.read)
router.patch('/:id', todoCtrl.update)
router.delete('/:id', todoCtrl.deleteTodo)
router.get('/:id', todoCtrl.gettodo)


module.exports = router