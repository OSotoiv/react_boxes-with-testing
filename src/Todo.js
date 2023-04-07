import React, { useState } from "react";


const Todo = ({ task, removeTodo, state, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <li data-testid="todo" className="todo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                textDecoration: `${task.state === 'done' ? 'line-through' : ''}`
            }}
        >
            {task.todo.toUpperCase()}
            {isHovered && task.state === 'incomplete' ?
                <button data-testid="todo-remove" className="todo-remove" type='button' onClick={() => state(id)}>done</button> : null}
            {isHovered && <button data-testid="todo-remove" className="todo-remove" type='button' onClick={() => removeTodo(id)}>X</button>}
        </li >)
}
export default Todo;