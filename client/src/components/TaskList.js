import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import * as taskActions from "../actions/taskActions";

const TaskList = ({ userId }) => {
  const { tasks, isFetching } = useSelector(({ tasks }) => tasks);
  const [toggleTasks, setToggleTasks] = useState(true);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();
  const getAllTasks = () => dispatch(taskActions.getUserTaskRequest())
  const updateTaskAction = ({ values, taskId }) =>
    dispatch(taskActions.updateTaskRequest({ values, taskId }));
  

    useEffect(() => {
      if(!tasks.length) {
        getAllTasks()
      }
         }, [getAllTasks, tasks]);

  const changeStatusTask = (task) => {
    statusTask(task);
  };

  const statusTask = (task) => {
    const { isDone, body, id } = task;
    const values = {
      isDone: !isDone,
      body,
    };
    updateTaskAction({ values, taskId: id });
  };

  const hideForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const closedForm = (value) => {
    setIsOpenForm(value);
  };


  const filterdTasks = tasks.filter((el) => el.userId === userId);

  return (
    <ul id={userId} style={{ padding: "0px" }}>
      {isOpenForm && (
        <TaskForm
          currentId={userId}
          currentBtn={isOpenForm}
          formIsClosed={closedForm}
        />)}
      {!isOpenForm && (
        <button onClick={hideForm} style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      )}
      {isOpenForm && <button onClick={() => setIsOpenForm(false)}>Back</button>}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "300px",
          justifyContent: "space-around",
        }}
      >
        <h4 style={{ margin: "0px" }}>All User Tasks </h4>
        {isFetching && "Loading"}
        <p>Have {filterdTasks.length}</p>
        {filterdTasks.length > 0 && (
          <button onClick={() => setToggleTasks(!toggleTasks)}>
            {!toggleTasks ? "Open" : "Close"}
          </button>
        )}
      </div>
      {filterdTasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          toggleTasks={toggleTasks}
          changeStatusTask={changeStatusTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
