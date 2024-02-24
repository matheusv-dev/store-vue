import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProductsView from "../views/ProductsView.vue";
import SummaryView from "../views/SummaryView.vue"

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
  {
    path: "/summary",
    name: "Summary",
    component: SummaryView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
