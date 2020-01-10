const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const todoRoute = require('./routes/todo_routes')

app.use('/', todoRoute)
app.use(cors())
app.use(bodyParser.json())



mongoose.connect(config.mongoUri)
	.then(() => {
		console.log('connected to mongodb atlas successfully')
	})
	.catch((error)=> {
		console.log('unnable to connect to mongodb atlas')
	})


module.exports = app;