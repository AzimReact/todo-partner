import React, {useState} from 'react';
import girlSound from '../assets/oni-chan.mp3'
import boySound from '../assets/uuh_baby.mp3'
const TodoForm = ({todos, setTodos, woman}) => {
    const [inputValue, setInputValue] = useState('')

    function play() {
        if (woman) {
            new Audio(boySound).play()
        } else {
            new Audio(girlSound).play()
        }
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