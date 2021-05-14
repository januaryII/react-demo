// 引入actions函数
import{
    CHANGE_LOGIN_MODAL_STATUS,
    // CHANGE_COUNT
}
from './actions';

// 定义初始数据
let defalutData = {
    loginModalStatus: false,
    // count: '1',: '1',
}

let reducer = function(state = defalutData,action){
    let {type,payload} = action;
    switch(type){
        case CHANGE_LOGIN_MODAL_STATUS:
            return {
                ...state,loginModalStatus: state.loginModalStatus
            }
        // case SOME_THING_FORM_AJAX_PARAMS:
        //     return Object.assign({}, state, { count: action.count });
        default: 
        return state;
    }
}
export default reducer;