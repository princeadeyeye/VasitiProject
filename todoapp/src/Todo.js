import React, { Component } from 'react';

class Todo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task:this.props.task,
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
        console.log(this.props)
    }

    toggleForm = () => {
        this.setState({
            isEditing:!this.state.isEditing
        })

    }

    handleUpdate = (e) => {
        e.preventDefault();
       this.props.updateTodo(this.state.task)
       this.setState({ isEditing: false})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleToggle = () => {
        this.props.toggleTodo(this.props._id);
    }
    render() {
        let result; 
        if(this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form'onSubmit={this.handleUpdate}>
                        <input 
                            type= 'text'
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className= 'Todo'>
                    
                    <li 
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.handleToggle}
                    >
                    {this.props.task}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleRemove}>Delete</button>
                        <button onClick={this.toggleForm}>Edit</button>
                    </div>
                </div>
            );
        }
        return result;
    }
}


export default Todo;
