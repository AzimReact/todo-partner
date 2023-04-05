import React, {useEffect, useState} from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [woman, setWoman] = useState(null)

    useEffect(() => {
        const gender = window.confirm("ARE YOU WOMAN?")
        setWoman(gender)
    }, [])
    const [todos, setTodos] = useState([])
    console.log(todos)
  return (
    <div className={`app img__for__${woman ? 'girls' : 'boys'}`}>
        <TodoForm woman={woman} todos={todos} setTodos={setTodos}/>
        <TodoList woman={woman} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
