// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
//Routes
import Home from "@/views/Home";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
//add plugin to view VUe2
// Vue.use(Router);

//start router instance Vue3 way
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/About",
        name: "About",
        component: About
    },
    {
        path: "/coin/:id",
        name: "coin-detail",
        component: CoinDetail
    }
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes
});
export default router;
