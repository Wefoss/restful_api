import React from 'react';
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../components/UserForm";
import Userlist from "../components/UserList";
import * as taskActions from '../actions/taskActions'
import { useEffect } from "react";


const Home = () => {
    const path = useLocation().pathname
    const {tasks} = useSelector(({tasks}) => tasks)
    const dispatch = useDispatch()
    const getAllTasks = () => dispatch(taskActions.getUserTaskRequest())
      
    useEffect(() => {
      if(!tasks.length) {
        getAllTasks()
      }
         }, [getAllTasks, tasks]);

    return (
        <>
        <h1>Users Task Pages</h1>
        {(path === '/' || path === '/user-list') && <NavLink to='/add-users'>Add User</NavLink >}<br/>
        <NavLink to='/user-list'>All Users</NavLink>
        <Routes >
        <Route path="/add-users" element={<UserForm />} />
        <Route path="/user-list" element={ <Userlist />} />
        <Route path="/" element={ <div>Home</div>} />
      </Routes>
        </>
    );
}

export default Home;