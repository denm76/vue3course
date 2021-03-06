import Main from "../pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "../pages/PostPage";
import AboutPage from "../pages/AboutPage";
import SinglePage from "../pages/SinglePage";
import PostPageWithStore from "../pages/PostPageWithStore";
import PostPageCompositionApi from "../pages/PostPageCompositionApi";


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
    {
        path:'/store',
        component: PostPageWithStore
    },
    {
        path:'/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;