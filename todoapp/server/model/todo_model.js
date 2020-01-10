const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
	todos: {
		type: String,
		trim: true
	}
})
	

module.exports = mongoose.model('Todo', TodoSchema)