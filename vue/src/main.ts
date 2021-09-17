import { createApp } from "vue";
import VueSocketIO from "vue-socket.io";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
