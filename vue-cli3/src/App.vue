<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import emitter from "./utils/miit";
export default {
  methods: {},
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    this.emitter.on("start:spinner", this.startSpinner);
  },
  beforeDestroy() {
    this.emitter.off("start:spinner", this.startSpinner);
  },
};
</script>

<style>
body {
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}
/* router transition*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
