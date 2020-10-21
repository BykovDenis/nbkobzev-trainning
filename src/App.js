import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import MyListContainer from './containers/list';
import MyInputsContainer from './containers/my-input';

const App = () => {
  const pathname = document.location.pathname;
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        {pathname === '/' && <Redirect to="/inputs" />}
        <Route path="/inputs" component={MyInputsContainer} />
        <Route path="/list" component={MyListContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
