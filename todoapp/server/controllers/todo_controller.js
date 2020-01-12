const Todo = require('../model/todo_model')



const create = (req, res) => {
	console.log(req.body)
	const todo = new Todo({
		task: req.body.task
	})
	todo.save()
		.then(()=> {
			res.status(201).json({
				message: 'Todo added successfully'
			})
		})
		.catch((error) => {
			res.status(400).json({ error: error })
		})
};


const read =  (req, res) => {
Todo.find()
		.then((todos) => {
			res.status(200).json(todos)
		})
		.catch((error) => {
			res.status(400).json({
				error: "canoot get todos"
			})
		})
};

const update = (req, res) => {
	const todo = new Todo({
		_id: req.params.id,
		title: req.body.title,
		text: req.body.text,
	})
	
Todo.updateOne({ _id: req.params.id }, todo)
		.then((todo) => {
			res.status(200).json({
				message: 'Todo updated successfully'
			})
		})
		.catch((error) => {
			res.status(400).json({
				error: error
			})
		})
};

const deleteTodo = (req, res, next) => {
	Todo.deleteOne({ _id: req.params.id})
		.then(() => {
			res.status(200).json({
				message: `Todo deleted successfully`
			})
		})
		.catch((error) => {
			res.status(400).json({ error: error})
		})

}


const getTodo = (req, res, next) => {
	Todo.findOne({ _id: req.params.id})
		.then((todo) => {
			res.status(200).json(todo)
		})
		.catch(() => {
			res.status(404).json({
				error:error
			})
		})
};

module.exports = {
	create,
	read,
	update,
	deleteTodo,
	getTodo
}