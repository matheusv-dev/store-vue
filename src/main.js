import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router";
import PrimeVue from "primevue/config";
import Column from "primevue/column";
import StyleClass from "primevue/styleclass";
import DataTable from "primevue/datatable";
import Lara from "./presets/lara";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, FaBoxes, RiZhihuFill, FaStar, BiGraphDownArrow, RiMoneyDollarBoxFill, FaLayerGroup  } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, FaBoxes, FaStar, BiGraphDownArrow, RiMoneyDollarBoxFill, FaLayerGroup );

const vueApp = createApp(App).use(router).use(PrimeVue, { unstyled: true, pt: Lara });

vueApp.directive("styleclass", StyleClass);

vueApp.component("DataTable", DataTable);
vueApp.component("Column", Column);

vueApp.component("v-icon", OhVueIcon);

vueApp.mount("#app");
