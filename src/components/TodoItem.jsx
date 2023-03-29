import React, {useState} from 'react';

const TodoItem = ({todos, setTodos, todo, i}) => {
    const [isEdit, setIsEdit] = useState(null)
    const [editInput, setEditInput] = useState('')

    const removeTodo = (todoId) => {
        setTodos(todos.filter(t => t.id !== todoId))
    }

    const editTodo = (id, name) => {
        setIsEdit(id)
        setEditInput(name)
    }

    const saveTodo = (id) => {
        let newTodos = [...todos.map(todo => {
            if(todo.id === id) {
                if(editInput.trim() !== '') todo.name = editInput.slice(0, 10)
            }
            return todo
        })]

        setTodos(newTodos)
        setIsEdit(null)
    }
    return (
        <>
            <div> <span>{i + 1}.</span>
                {isEdit === todo.id
                    ? <input className='editInput' style={{marginLeft: 3, border: 'none'}} value={`${editInput}`} onChange={(e) => setEditInput(e.target.value) } autoFocus/>
                    : <span className='todo__name' style={{marginLeft: 5}}> {todo.name}</span>
                }
            </div>
            <div>
                <button onClick={() => isEdit ?  saveTodo(todo.id) :  editTodo(todo.id, todo.name) }>{isEdit ? 'SAVE' : 'EDIT'}</button>
                <button onClick={() => removeTodo(todo.id)} style={{marginLeft: '10px'}}>X</button>
            </div>
        </>
    );
};

export default TodoItem;