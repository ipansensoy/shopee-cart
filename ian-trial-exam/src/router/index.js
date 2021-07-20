import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../components/Cart.vue";
import Product from "../components/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Product,
  },
  {
    path: "/my-cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
