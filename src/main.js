import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");
