import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '../src/stores';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/style.css';
import 'animate.css';



const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");