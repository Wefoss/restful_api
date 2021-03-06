import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../actions/userActions";

import UserItem from "./UserItem";

const Userlist = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const { users, isFetching, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const getUsersReq = ({ limit, offset } = {}) =>
    dispatch(userActions.getUserRequest({ limit, offset }));

  const renderUsers = users.map((user) => (
    <UserItem user={user} tasks={tasks} key={user.id} />
  ));

  useEffect(() => {
    if (!users.length) {
      getUsersReq();
    }
  }, [getUsersReq]);
  return (
    <section>
      {tasks.error && tasks.error.message}
      {isFetching && <span>Loading...</span> }
      {error && error.message}
      <h1>User List</h1>
      <ul>{renderUsers}</ul>
    </section>
  );
};

export default Userlist;
