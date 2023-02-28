import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";

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
            component: () => import("../pages/DetailPage.vue"),
        },
        {
            path: "/history",
            name: "HistoryPage",
            component: () => import("../pages/HistoryPage.vue"),
        },
        {
            path: "/edit",
            name: "EditCart",
            component: () => import("../pages/EditCart.vue"),
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../pages/Cart/Cart.vue"),
        },
    ],
});

export default router;
