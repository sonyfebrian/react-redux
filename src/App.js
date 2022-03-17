import './App.css';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Analytics from './components/Analytics';
import User from './components/User';
import { AddUser } from './components/user/AddUser';
import { EditUser } from './components/user/EditUser';


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);
  return (
    <>
      <Router>
      <div>
        <Switch>
        
        <Route path="/analytics">
            <Analytics />
          </Route>
        <Route path="/user">
            <User />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
