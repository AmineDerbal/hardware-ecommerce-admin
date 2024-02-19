import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { RootState } from './redux/store';
import { Topbar, Sidebar } from './components';
import { Login, Home, UserList } from './pages';

const IndexRouter = () => {
  const { isAdmin, accessToken } = useSelector(
    (state: RootState) => state.user,
  );
  if (isAdmin) {
    console.log('the user access token is : ', accessToken);
  }
  useEffect(() => {}, [isAdmin, accessToken]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
        {isAdmin ? (
          <div>
            <Topbar />
            <div className="flex">
              <Sidebar />
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/users"
                  element={<UserList />}
                />
              </Routes>
            </div>
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      </Router>
    </div>
  );
};

export default IndexRouter;
