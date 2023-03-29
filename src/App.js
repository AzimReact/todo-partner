import React, {useState} from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([])

  return (
    <div className='app'>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
