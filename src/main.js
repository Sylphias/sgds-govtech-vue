import Vue from "vue";
import App from "./App.vue";

import "sgds-govtech/css/sgds.css";
import "animate.css/animate.min.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
