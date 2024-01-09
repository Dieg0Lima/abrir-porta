import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.min.css';
import '@/assets/scss/global.scss'

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
