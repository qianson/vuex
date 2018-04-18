import Vue from 'vue';
import Vuex from 'vuex';
// 导入status模块（全局应用状态的模块）
import management from './modules/management';
import set from './modules/set';
Vue.use(Vuex);

// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: { // 导入模块
        management,
        set
    },
    // 是否开启严格模式
    strict: debug
});
