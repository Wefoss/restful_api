import React from "react";
import { useDispatch } from "react-redux";
import * as taskActions from "../actions/taskActions";

const TaskList = ({ taskItem, statusTask }) => {
  const dispatch = useDispatch();
  const removeTask = ({ taskId }) => dispatch(taskActions.deleteTaskRequest({ taskId }));
  const changeStatusTask = (task) => {
    statusTask(task);
  };

  const deleteTask = (taskId) => {
    removeTask({ taskId });
  };

  return (
    <li
      onDoubleClick={() => changeStatusTask(taskItem)}
      style={{
        borderLeft: taskItem.isDone ? "2px solid green" : "2px solid red",
        cursor: "pointer",
        margin: "5px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <p style={{ margin: "5px" }}>{taskItem.body}</p>
      <button
        onClick={() => deleteTask(taskItem.id)}
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
      > X
      </button>
    </li>
  );
};

export default TaskList;
