import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 5;
  let unCompletedTask = 2;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">Tou have {unCompletedTask} of</b>
      <b data-cy="header-total-task"> {totalTask} are remaining</b>
</div>

  );
};

export default TaskHeader;
