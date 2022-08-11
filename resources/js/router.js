import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Demotest from "./components/Demotest.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HelloWorld,
            props: {
                msg: "demotest"
            }
        },
        {
            path: '/demotest',
            component: Demotest,
            props: {
                msg: "homepage"
            }
        }
    ]
})