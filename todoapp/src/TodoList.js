import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { RestdataSource } from './api-todo'

class Todolist extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
        	todos: []
        };

        this.dataSource = new RestdataSource("http://localhost:5000/api/v1/todo")
    }


componentDidMount() {
    this.dataSource.GetData(data => this.setState({ todos: data}))
    console.log(this.state.todos)
}

save = (data) => {
    console.log(data.task)
        this.dataSource.Store(data.task, this.addTodo())
}

edit = (data) => {
            this.dataSource.Update(data, this.update())

}

delete = (data) => {
    console.log(data)
    this.dataSource.Delete(data, this.remove())
}

cancel = () => this.props.history.push('/')


    addTodo = (newTodo) => {
    	this.setState({
    		todos: [...this.state.todos, newTodo]
    	})
    }

    remove = (id) => {
    	this.setState({
    		todos:this.state.todos.filter(t => t.id !== id)
    	})
    }

    update = (id, updatedTask) => {
    	const updatedTodos = this.state.todos.map(todo => {
    		if (todo.id === id) {
    			return {...todo, task: updatedTask}
    		}
    		return todo;
    	});
    	this.setState({ todos: updatedTodos })
    }

    toggleCompletion = (id) => {
    	const updatedTodos = this.state.todos.map(todo => {
    		if (todo.id === id) {
    			return {...todo, completed : !todo.completed }
    		}
    		return todo;
    	});
    	this.setState({ todos: updatedTodos })
    }
    render() {
    	const todos = this.state.todos.map(todo => 
    		<Todo 
	    		key={todo._id}
	    		id={todo._id}
	    		task={todo.task} 
	    		completed={todo.completed}
	    		removeTodo = {this.delete}
	    		updateTodo={this.edit}
	    		toggleTodo={this.toggleCompletion}
    		/>
    		);
        return (
        	<div className='TodoList'>
        		<h1>Todo List<span>A simple Todo List</span></h1>
        		
        		<ul>
        			{todos}
        		</ul>
        		<TodoForm createTodo ={this.save} />
        	</div>            
        );
    }
}

export default Todolist;
