import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import Home from "./pages/About";
import Home from "./pages/SinglePost";

const router = new VueRouter({
    mode: "history",
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },

        {
            path: "/chi-siamo",
            name: "about",
            component: About
        },

        {
            path: "/singlepost",
            name: "single-post",
            component: SinglePost
        },
    ]
})

export default router