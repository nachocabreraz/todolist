import React from "react";
import ToDo from './ToDo';

// componente me mapea todos los To-Dos y me duelve uno x uno
const ToDoList = ({ toDoList, handleFilter, toggleHandler }) => {
    return (
        <div>
            {toDoList.map((todo, index) => {
                return (
                    <ToDo key={index} todo={todo} toggleHandler={toggleHandler} />
                )
            })}
            <button onClick={handleFilter} >Clear completed tasks</button>
        </div>
    );
};

export default ToDoList;