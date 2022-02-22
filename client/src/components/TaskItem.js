import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import * as taskActions from "../actions/taskActions";
import TaskUpdateForm from './TaskUpdateForm';

const TaskItem = ({task, toggleTasks, changeStatusTask}) => {
    const [toggleForm, setToggleForm] = useState(false)
    const dispatch = useDispatch();
    const removeTask = ({ taskId }) =>
    dispatch(taskActions.deleteTaskRequest({ taskId }));

     const childStatusTask = (task) => {
       if(!toggleForm) {
        changeStatusTask(task)
       }
       
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
          {!toggleForm && <p style={{ margin: "5px", width: '50%' }}>{task.body}</p>}
          {toggleForm && <TaskUpdateForm taskId={task.id} closedForm={setToggleForm} />}
          { !toggleForm &&  <button onClick={() => setToggleForm(!toggleForm)} style={{fontSize: '0.5rem', padding: "0px", "backgroundColor": "transparent", "border": '1px solid lightgray', "cursor": "pointer"}}>change task</button> }
          { toggleForm &&  <button onClick={() => setToggleForm(false)} style={{fontSize: '0.5rem', padding: "0px", "backgroundColor": "transparent", "border": '1px solid lightgray', "cursor": "pointer"}}>back</button> }
          {!toggleForm && <button
            onClick={() => deleteTask(task.id)}
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              borderRadius: "5px",
            }}>
            X
          </button>}
        </div>
      </li>
    );
}

export default TaskItem;
