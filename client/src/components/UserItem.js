import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import * as taskActions from "../actions/taskActions";
import * as userActions from "../actions/userActions";

const UserItem = ({ user }) => {
  const {tasks, isFetching, error } = useSelector(({ tasks }) => tasks);
  const [toggleTasks, setToggleTasks] = useState(true);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();
  const updateTaskAction = ({ values, taskId }) =>
    dispatch(taskActions.updateTaskRequest({ values, taskId }));
  const deleteUserAction = ({userId}) => dispatch(userActions.deleteUserRequest({userId}))   
  const hideForm = () => {
    setIsOpenForm(isOpenForm === true ? false : true);
  };
  const closedForm = (value) => {
    setIsOpenForm(value);
  };
  const statusTask = (task) => {
    const { isDone, body, id } = task;
    const values = {
      isDone,
      body,
    };
    updateTaskAction({ values, taskId: id });
    };
 
    const removeUser = (userId) => {
      const conf = window.confirm('Are you sure wanna delete this task ?')
      if(conf) {
        deleteUserAction({userId})
      } 
      
    }  
    const filterdTasks = tasks.filter((el) => el.userId === user.id);
   return (
    <>
      <li key={user.id} style={{ border: "2px solid gray", width: "300px" }}>
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>{user.email}</p> 
            <button onClick={() => removeUser(user.id)}>Remove</button>
            </div>
        {isOpenForm && (
          <TaskForm
            currentId={user.id}
            currentBtn={isOpenForm}
            formIsClosed={closedForm}/>)}
        {!isOpenForm && (
          <button onClick={hideForm} style={{ marginLeft: "10px" }}>
            Add Task
          </button>)}
        {isOpenForm && (
          <button onClick={() => setIsOpenForm(false)}>Back</button>)}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              justifyContent: "space-around",
            }}
          >
            <h4>All User Tasks </h4>
            <p>Have {filterdTasks.length}</p>
        { filterdTasks.length > 0  &&   <button
              onClick={() =>
                setToggleTasks(toggleTasks === false ? true : false)}>
              {toggleTasks ? "Open" : "Close"}
            </button>}
          </div>
          <ul style={{ display: toggleTasks ? "none" : "block", padding: '0px' }}>
            {filterdTasks.map(task => <TaskList
            taskItem={task}
            key={task.id}
            statusTask={statusTask}/>)}
          </ul>
        </div>
      </li>
    </>
  );
};

export default UserItem;
