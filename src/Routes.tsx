import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <Home/>} />
        <Route path="/search" component={() => <Search/>} />
      </Switch>   
    </BrowserRouter>
  );
}

export default Routes;
