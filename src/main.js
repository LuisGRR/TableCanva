import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

import draggableComponent from "vuedraggable";

import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.component("dragglabe-componente", draggableComponent);

app.use(pinia);
app.mount("#app");
