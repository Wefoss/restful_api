import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as taskActions from "../actions/taskActions";

const TaskItem = ({task, toggleTasks, changeStatusTask}) => {
    const dispatch = useDispatch();
    const removeTask = ({ taskId }) =>
    dispatch(taskActions.deleteTaskRequest({ taskId }));

     const childStatusTask = (task) => {
        changeStatusTask(task)
     }

    const deleteTask = (taskId) => {
        removeTask({ taskId });
      };

    return (
        <li
        id={task.userId}
        onDoubleClick={(event) => childStatusTask(task, event)}
        style={{
          display: toggleTasks ? "block" : "none",
          borderLeft: task.isDone ? "2px solid green" : "2px solid red",
          cursor: "pointer",
          margin: "5px",
          padding: "0 10px",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ margin: "5px" }}>{task.body}</p>
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              borderRadius: "5px",
            }}>
            X
          </button>
        </div>
      </li>
    );
}

export default TaskItem;
