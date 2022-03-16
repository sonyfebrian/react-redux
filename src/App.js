import './App.css';
import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tabel from './components/Transaksi';
import Analytics from './components/Analytics';
import User from './components/User';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);
  return (
    <>

    <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/table" element={<Tabel />} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
 
     
    </>
  );
}

export default App;
