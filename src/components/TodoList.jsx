import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, setTodos}) => {
    return (
        <>
            <h1 style={{marginTop: 25, color: 'wheat'}}>MY EX GIRLS!</h1>
            {todos.map((todo, i) =>
                <div className='todo' key={todo.id}>
                    <TodoItem i={i} todos={todos} setTodos={setTodos} todo={todo}/>
                </div>
            )}

        </>
    );
};

export default TodoList;