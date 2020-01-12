const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const todoRoute = require('./routes/todo_routes')


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', todoRoute)




mongoose.connect('mongodb+srv://new-user_1:adeyeye@cluster0-qscnl.mongodb.net/test?retryWrites=true&w=majority')
	.then(() => {
		console.log('connected to mongodb atlas successfully')
	})
	.catch((error)=> {
		console.log('unnable to connect to mongodb atlas')
	})


module.exports = app;