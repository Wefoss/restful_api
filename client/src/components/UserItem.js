
import React, {useState} from "react";
import TaskForm from './TaskForm'

const UserItem = ({user}) => {
    const [toggleTasks, setToggleTasks] = useState(false)
    const [isOpen, setIdOpen] = useState(false)    
    const hideForm = () => {
    setIdOpen(isOpen === true ? false : true);
  };

  const closedForm = (value) => {
    setIdOpen(value)
    console.log('dfsd');
  }

  return (
    <>
      <li style={{"border": "2px solid gray", "width": "300px" }}>
        {user.email} {isOpen && <TaskForm currentId={user.id} currentBtn={isOpen}  formIsClosed={closedForm}/>}
       {!isOpen && <button onClick={hideForm} style={{ marginLeft: "10px" }}>
          Add Task
        </button>}
         <div> 
           <div style={{"display": "flex", 'alignItems': "center", "width": "200px", "justifyContent": "space-around"}}>
             <h3>All Task </h3>
             <p >Have {user.Tasks.length}</p>
             <button onClick={() => setToggleTasks(toggleTasks === false ? true : false)}>{toggleTasks ? 'Open' : 'Close'}</button>
              </div> 
            <ul style={{"display": toggleTasks ? "none" : "block"}}>
               {user.Tasks.map(el => <li key={el.id}>{el.body}</li>)}
            </ul>
         </div>
      </li>
    </>
  );
};

export default UserItem;
