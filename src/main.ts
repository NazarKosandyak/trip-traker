import { createApp } from "vue";
import "@/assets/scss/general.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import { Unicons, PrimeVue } from "@/plugins";
import router from "@/router";

const app = createApp(App);
app.use(createPinia());
app.use(Unicons);
app.use(PrimeVue);

app.use(router);
app.mount("#app");
