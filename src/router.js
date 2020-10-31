// import Vue from "vue";
import {createWebHistory, createRouter } from "vue-router";
//Routes
import Home from "@/views/Home";

//add plugin to view VUe2
// Vue.use(Router);

//start router instance Vue3 way
const routes = [
        {
            path:"/",
            name:"Home",
            component: Home
        }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});
export default router;
