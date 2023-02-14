import { createApp } from 'vue';
import App from "./App";
import router from "./router/index";

// import axios from 'axios';
// import VueAxios from 'vue-axios';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
/* eslint-disable no-new */
const app = createApp(App).use(router);
app.use(PaperDashboard);
app.mount('#app');
