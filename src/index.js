import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
// 高阶组件
import {RouterGuarder} from './router/routerGuarder';
import routers from './router/index';
import './index.css';
// 引入provider 包含router，以便组件可以访问到store
import { Provider } from 'react-redux';
import store from './store';
import {Login} from './view/login/index.js';
import reportWebVitals from './reportWebVitals';
// import {Home} from './view/home/index.js';
// import App from './App'; 


// 中间件redux-saga，作用于redux异步处理函数、请求，类似于vuex>mutations。redux-logger实时打印日志。
// import { rootSage } from './sagas';
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware(rootSage);
// // 创建store
// let store = createStore(reducersDemo, applyMiddleware(sagaMiddleware, logger));
// // then run the saga
// sagaMiddleware.run(rootSage);


ReactDOM.render(
    <Provider store={store}>
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
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
