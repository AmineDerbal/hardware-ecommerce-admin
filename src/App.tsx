import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Topbar, Sidebar } from './components';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Routes></Routes>
    </div>
  );
};

export default App;
