const state = { // 要控制的状态
    executorP: false, // 工单派单执行人选择弹框状态控制
    feedBackExe: false, // 工单反馈
    reassignExe: false, // 工单改派
    repairExe: false // 工单报修
};
const getters = { // 状态改变前的操作

};
const actions = { // 提交异步操作

};
const mutations = { // 提交同步操作
    executorP_change (state) {
        state.executorP = !state.executorP;
    },
    feedExeChange (state) {
        state.feedBackExe = !state.feedBackExe;
    },
    reassignExeChange (state) {
        state.reassignExe = !state.reassignExe;
    },
    repairExeChange (state) {
        state.repairExe = !state.repairExe;
    }
};
export default {
    state,
    getters,
    actions,
    mutations

};
