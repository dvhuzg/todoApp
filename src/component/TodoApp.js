import React, { useState } from "react";
import "./todoapp.css";
function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };
  const Delete = (e,id)=>{
    e.preventDefault();
    setTaskList(taskList.filter(t=>t.id!==id))
  }
  const Complete = (e,id)=>{
    e.preventDefault();
    const element = taskList.findIndex(elem => elem.id===id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
        ...newTaskList[element],
        isCompleted:true
    }
    setTaskList(newTaskList);
  }
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className={t.isCompleted ? 'crossText':''}>{t.value} <button className="delete" onClick={e=>Delete(e,t.id)}>Delete</button> <button className="completed" onClick={e=>Complete(e,t.id)}>Complete</button></li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
