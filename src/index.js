import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {RouterGuarder} from './router/routerGuarder';
import routers from './router/index';
import './index.css';
// import App from './App'; 
import {Login} from './view/login/index.js';
// import {Home} from './view/home/index.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <HashRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/404" component={PageNotFound}/> */}
        <RouterGuarder config={routers}/>
    </Switch>
    
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
