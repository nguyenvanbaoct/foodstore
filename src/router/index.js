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
            path: "/history",
            name: "HistoryPage",
            component: () => import("../pages/HistoryPage.vue"),
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../pages/Cart/Cart.vue"),
        },
    ],
});

export default router;
