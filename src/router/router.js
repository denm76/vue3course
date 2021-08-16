import Main from "../pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "../pages/PostPage";
import AboutPage from "../pages/AboutPage";
import SinglePostPage from "../pages/SinglePostPage";


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
        component: SinglePostPage
    },
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;