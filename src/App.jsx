import { useState } from 'react';
import data from './data.json';
import Header from './Header';
import ToDoList from './ToDoList';
import Form from './Form';
import './App.css'

function App() {
  const [toDoList, setToDoList] = useState(data);

  const toggleHandler = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div>
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} toggleHandler={toggleHandler} />
      <Form addTask={addTask} />
    </div>
  )
}

export default App
