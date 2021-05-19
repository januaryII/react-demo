// 定义actions函数触发方法 
export const CHANGE_LOGIN_MODAL_STATUS = "CHANGE_LOGIN_MODAL_STATUS";
export function changeStatus(loginModalStatus){
    return {
        type: CHANGE_LOGIN_MODAL_STATUS,//定义触发类型
        payload: loginModalStatus//触发
        // loginModalStatus
    }
}
export default{
    change: changeStatus
}

// export let actionTest = {
//     changeStatus
// }
// const CHANGE_TEST = "CHANGE_TEST";
// export function test(data){
//     return {
//         type: CHANGE_TEST,
//         payload: data
//     }
// }