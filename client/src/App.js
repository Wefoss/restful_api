import React from "react";
import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";
import UserForm from "./components/UserForm";
import Userlist from "./components/UserList";



function App() {
  const path = useLocation().pathname
  
  return (
    <section>
      <h1>Users Task Pages</h1>
        {(path === '/' || path === '/user-list') && <NavLink to='/add-users'>Add User</NavLink >}<br/>
        <NavLink to='/user-list'>All Users</NavLink>
        <Routes >
        <Route path="/add-users" element={<UserForm />} />
        <Route path="/user-list" element={ <Userlist />} />
        <Route path="/" element={ <div>Home</div>} />
      </Routes>
    </section>
  );
}

export default App;
