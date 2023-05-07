//import Vue from "vue";
//import { createStore } from "vuex";

//export default new Vue();

//const bus = createStore({});

//export default bus;
import mitt from "mitt";
const emitter = mitt();

export default {
  install(Vue) {
    Vue.config.globalProperties.emitter = emitter;
  },
};
