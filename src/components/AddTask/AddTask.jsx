import React, { useState } from "react";
import styles from "./addTask.module.css";
import Counter from "../Counter/Counter";

const AddTask = () => {
  const [task, setTask]= useState([]);
  const [newtask, setNewTask]= useState("")
  // NOTE: do not delete `data-cy` key value pair


const handleChangeFun= (e)=>{
    setNewTask(e.target.value)
 } 
const taskAddFun= ()=>{
    task.push({
      id: Date.now(),
      value: newtask,
      isComplte: false,
    });
    console.log(newtask)
    setTask([...task])
} 

  return (
    <div className={styles.todoForm}>
    <input data-cy="add-task-input" type="text" placeholder="Add Task" onChange={handleChangeFun} className={styles.task1} />
      <button data-cy="add-task-button" onClick={taskAddFun} className={styles.taskbutton} >+</button>

      <div>
        {task.map((el)=>{
          return <div className={styles.appendTask} >
            <input type="checkbox" className={styles.ckeckbox1} />
            <div className={styles.taskitem}  >{el.value}</div>
            < Counter />
          </div>
        })}
      </div>
    </div>
    
  );
};

export default AddTask;
