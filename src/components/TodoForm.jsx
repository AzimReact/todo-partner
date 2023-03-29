import React, {useState} from 'react';

const TodoForm = ({todos, setTodos}) => {
    const [inputValue, setInputValue] = useState('')
    const addTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Date.now(),
            name: inputValue
        }
        if(inputValue.trim() !== '') {
            setTodos([...todos, newTodo])
        }
        setInputValue('')
    }
    return (
        <form onSubmit={addTodo}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='write the names'/>
            <button style={{marginLeft: 10}}>ADD</button>
        </form>
    );
};

export default TodoForm;