import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/usersList/usersListSlice';
import { RootState } from '../redux/store';

const UserList = () => {
  const dispatch: ThunkDispatch<RootState, any, Action> = useDispatch();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.usersList,
  );
  const { accessToken } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (accessToken !== null) {
      dispatch(fetchUsers(accessToken));
    }
  }, [dispatch, accessToken]);
  console.log(users);
  return <div>UserList</div>;
};

export default UserList;
