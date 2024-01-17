import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, [username]);
  return <div>App</div>;
};

export default App;
