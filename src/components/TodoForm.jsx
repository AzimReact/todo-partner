import React, {useState} from 'react';
import sound from '../assets/oni-chan.mp3'

const TodoForm = ({todos, setTodos}) => {
    const [inputValue, setInputValue] = useState('')

    function play() {
        new Audio(sound).play()
    }
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
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='write the names' maxLength='10'/>
            <button onClick={play} style={{marginLeft: 10}}>ADD</button>
        </form>
    );
};

export default TodoForm;