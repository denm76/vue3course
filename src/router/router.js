import Main from "../pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "../pages/PostPage";
import AboutPage from "../pages/AboutPage";
import SinglePage from "../pages/SinglePage";


const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: SinglePage
    },
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;