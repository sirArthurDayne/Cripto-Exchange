// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
//Routes
import Home from "@/views/Home";
import About from "@/views/About";
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
    }
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes
});
export default router;
