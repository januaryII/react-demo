// 定义actions函数触发方法 
export const CHANGE_LOGIN_MODAL_STATUS = "CHANGE_LOGIN_MODAL_STATUS";
export function changeStatus(data){
    return {
        type: CHANGE_LOGIN_MODAL_STATUS,//定义触发类型
        payload: data//触发
    }
}
export default{
    changeStatus
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