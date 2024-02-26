import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProductsView from "../views/ProductsView.vue";
import SummaryView from "../views/SummaryView.vue"
import SoldView from "../views/SoldView.vue"

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
  {
    path: "/sold",
    name: "Sold",
    component: SoldView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "bg-purple-700",
  linkExactActiveClass: "bg-purple-700",
});

export default router;
