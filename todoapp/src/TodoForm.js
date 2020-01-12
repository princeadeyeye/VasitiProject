import React, { Component } from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        	task:'',
            isEmpty: true,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value, isEmpty:false })

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({...this.state});
        console.log(this.state)
        this.setState({task:'', isEmpty: true})
    }

    render() {
        return (
        	<div>
        		<form className='TodoForm' onSubmit={this.handleSubmit}>
	        	  <label htmlFor='task'>New Todo</label>
                	<input 
	        			type='text'
	        			id='task'
                        placeholder='New Todo'
	        			name='task'
	        			onChange={this.handleChange}
	        			value={this.state.task}
	        		/>
	        		<button disabled={this.state.isEmpty}> Add Todo</button>
        		</form>
        	</div>
        );
    }
}

export default TodoForm;
