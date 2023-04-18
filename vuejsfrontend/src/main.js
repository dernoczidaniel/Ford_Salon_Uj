import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/style.css';




const app = createApp(App);

const pinia = createPinia(); // Pinia példány
app.use(router);
app.use(pinia); // Pinia hozzáadása az alkalmazáshoz
app.mount("#app");

