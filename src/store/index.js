// // 创建store
// import {createStore} from 'redux';
// import {rootReducer} from './reducers.js';
//  let store = createStore(rootReducer);
//  export default store;


 import {createStore} from 'redux';

// import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers.js';

// let store = createStore(rootReducer,composeWithDevTools());//{cart,goods}
let store = createStore(rootReducer);//{cart,goods}

export default store;


