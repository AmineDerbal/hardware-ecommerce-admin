import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { Home, Login } from './pages';

const App = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, [isAdmin]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAdmin ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
