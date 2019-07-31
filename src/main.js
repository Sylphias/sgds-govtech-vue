import Vue from "vue";
import App from "./App.vue";
import VueHighlightJS from "vue-highlightjs";

import "sgds-govtech/css/sgds.css";
import "highlight.js/styles/atom-one-light.css";

Vue.config.productionTip = false;

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

new Vue({
    render: h => h(App)
}).$mount("#app");
