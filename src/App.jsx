import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
}

export default App;
