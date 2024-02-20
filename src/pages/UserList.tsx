import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { fetchUsers } from '../redux/usersList/usersListSlice';
import { RootState } from '../redux/store';

const UserList = () => {
  const dispatch: ThunkDispatch<RootState, any, Action> = useDispatch();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.usersList,
  );
  const { accessToken } = useSelector((state: RootState) => state.user);
  const mappedUsers = users.map((user) => ({ ...user, id: user._id }));
  useEffect(() => {
    if (!accessToken) {
      return;
    }

    dispatch(fetchUsers(accessToken));
  }, [dispatch, accessToken]);
  console.log(users);
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
  ];
  return (
    <div>
      <DataGrid
        rows={mappedUsers}
        columns={columns}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
