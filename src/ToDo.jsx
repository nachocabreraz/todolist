import React from "react";

// muestro la task de todas las tareas
const ToDo = ({ todo, toggleHandler }) => {

    const handleClick = (e) => {
        e.preventDefault();
        toggleHandler(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? 'strike' : ''}>
            {todo.task}
        </div>
    );
};

export default ToDo;