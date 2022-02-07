import React, {useState} from "react";
import TaskForm from './TaskForm'

const UserItem = ({user}) => {
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
      <li>
        {user.email} {isOpen && <TaskForm currentBtn={isOpen}  formIsClosed={closedForm}/>}
       {!isOpen && <button onClick={hideForm} style={{ marginLeft: "10px" }}>
          Add Task
        </button>}
      </li>
    </>
  );
};

export default UserItem;
