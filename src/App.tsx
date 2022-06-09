import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CadUser from './pages/CadUser';

const App =()=> {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/user/add" component={CadUser}></Route>
      </Switch>
    </>
  );
}

export default App;
