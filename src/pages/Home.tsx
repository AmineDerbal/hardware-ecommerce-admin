import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Topbar } from '../components';

const Home = () => {
  return (
    <div>
      <Router>
        <Topbar />
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default Home;
