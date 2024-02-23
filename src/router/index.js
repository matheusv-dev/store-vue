import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
