import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as userActions from '../actions/userActions'

import UserItem from './UserItem'

const Userlist = () => {
  const { tasks } = useSelector(({ tasks }) => tasks)
  const { users, isFetching, error } = useSelector(({ users }) => users)
  const dispatch = useDispatch()
  const getUsersReq = ({ limit, offset } = {}) =>
    dispatch(userActions.getUserRequest({ limit, offset }))
  
  const renderUsers = users.map(el => <UserItem user={el}  tasks={tasks} key={el.id} />)

    useEffect(() => {
      if(!users.length) {
        getUsersReq()
      }
    
  }, [])

  return (
    <section>
      {isFetching && 'Loading'}
      {error && error.message}
      <h1>User List</h1>
      <ul>{renderUsers}</ul>
    </section>
  )
}

export default Userlist
