import { useSelector, useDispatch } from "react-redux";
import React, {useState} from "react";
import TaskForm from './TaskForm'
import * as taskActions from '../actions/taskActions'

const UserItem = ({user}) => {
    const {tasks, isFetching, error} = useSelector(({tasks}) => tasks)
    const [toggleTasks, setToggleTasks] = useState(true)
    const [isOpenForm, setISOpenForm] = useState(false)    
    const dispatch = useDispatch()
    const updateTaskAction = ({values, taskId}) => dispatch(taskActions.updateTaskRequest({values, taskId}))
    const hideForm = () => {
      setISOpenForm(isOpenForm === true ? false : true);
  };
   const closedForm = (value) => {
    setISOpenForm(value)
      }
    const statusTask = (task) => {
        const {isDone, body, id} = task
        const values = {
          isDone,
          body
          }
        updateTaskAction({values, taskId: id})
        
    }
   const filterdTasks = tasks.filter(el => el.userId === user.id)
   
  return (
    <>
      <li key={user.id} style={{"border": "2px solid gray", "width": "300px" }}>
        {user.email} {isOpenForm && <TaskForm currentId={user.id} currentBtn={isOpenForm}  formIsClosed={closedForm}/>}
       {!isOpenForm && <button onClick={hideForm} style={{ marginLeft: "10px" }}>
          Add Task
        </button>}
       {isOpenForm && <button onClick={() => setISOpenForm(false)}>Back</button>}
          <div> 
           <div style={{"display": "flex", 'alignItems': "center", "width": "200px", "justifyContent": "space-around"}}>
             <h3>All Tasks </h3>
             <p >Have {filterdTasks.length}</p>
             <button onClick={() => setToggleTasks(toggleTasks === false ? true : false)}>{toggleTasks ? 'Open' : 'Close'}</button>
              </div> 
            <ul style={{"display": toggleTasks ? "none" : "block"}}>
            {filterdTasks.map((el, i)=> <li onDoubleClick={() => statusTask(el)} key={i} style={{"borderLeft": el.isDone ? '2px solid green' : '2px solid red', "cursor": "pointer", "margin": "5px"}}>{el.body}</li>)}
            </ul>
         </div>
      </li>
    </>
  );
};

export default UserItem;
