import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Comunity from './pages/Comunity/Comunity';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/Blog" exact component={Comunity}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
