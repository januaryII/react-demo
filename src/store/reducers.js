// 由多个不同 reducer 函数作为 value 的 object 合并成为一个总的 reducers 函数
import { combineReducers } from "redux";

// 引入reducer
import loginReducer from './login-reducer';
// import navReducer from './showNav-reducer';

// 把多个reducer组合成一个reducer
 
const rootReducer = combineReducers({
    loginStatus: loginReducer,
    // showNav: navReducer
});
export default rootReducer;