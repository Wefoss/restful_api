import { useDispatch } from "react-redux";
import React from "react";
import * as userActions from "../actions/userActions";
import TaskList from "../components/TaskList";

const UserItem = ({ user }) => {
    const dispatch = useDispatch();
  const deleteUserAction = ({userId}) => dispatch(userActions.deleteUserRequest({userId}))   
   
    const removeUser = (userId) => {
      const conf = window.confirm('Are you sure wanna delete this user ?')
      if(conf) {
        deleteUserAction({userId})
      } 
    }  
   
    
   return (
         <li key={user.id} style={{ border: "2px solid gray", width: "300px", listStyle: "none"}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>{user.firstName}</p> 
            <button onClick={() => removeUser(user.id)}>Remove</button>
            </div>
            <TaskList userId={user.id}/>
       </li>
    );
};

export default UserItem;
