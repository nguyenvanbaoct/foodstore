import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import HistoryPage from "../pages/HistoryPage.vue";
import EditCart from "../pages/EditCart.vue";
import Cart from "../pages/Cart.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage,
        },
        {
            path: "/detail/:id",
            name: "DetailPage",
            component: DetailPage,
        },
        {
            path: "/history",
            name: "HistoryPage",
            component: HistoryPage,
        },
        {
            path: "/edit",
            name: "EditCart",
            component: EditCart,
        },
        {
            path: "/cart",
            name: "CartPage",
            component: Cart,
        },
    ],
});

export default router;
