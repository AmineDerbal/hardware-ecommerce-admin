import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { RootState } from './redux/store';
import App from './App';
import { Login } from './pages';

const IndexRouter = () => {
  const { isAdmin } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, [isAdmin]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAdmin ? <App /> : <Navigate to="/login" />}
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

export default IndexRouter;
