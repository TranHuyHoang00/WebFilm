import React from 'react';
import './ListTodo.scss'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';//
import Color from '../HOC/Color';
class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'doing homework2' },
            { id: 'todo3', title: 'doing homework3' },
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success("Add success")
    }
    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListTodosCopy = [...ListTodos];
            let objIndex = ListTodosCopy.findIndex((item => item.id === todo.id));
            ListTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {}
            })
            toast.success("save success")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("Delete success")
        console.log(todo);
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo };
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }
    render() {
        let { ListTodos, editTodo } = this.state; // let ListTodos = this.state.ListTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0 //  kiem tra empty de edit // if rong =true , else
        return (
            <>
                <p>Hello Todos with React.js (Hoi Dan IT)</p>
                <div className='list-todo-container'>

                    <AddTodo addNewTodo={this.addNewTodo} />

                    <div className='list-todo-content'>
                        {ListTodos && ListTodos.length > 0 &&
                            ListTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1}-<input value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1}-{item.title}</span>
                                                }
                                            </>
                                        }
                                        <button onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save'
                                                :
                                                'Edit'
                                            }
                                        </button>
                                        <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Color(ListTodo);