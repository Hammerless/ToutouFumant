import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Carte from '../pages/carte';
import Valeurs from '../pages/nos-valeurs';
import Trouvez from '../pages/Trouvez-nous';
import Commandes from '../pages/commandes';
import Mentions from '../pages/mentions'


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'carte',
        path: '/carte',
        component: Carte
    },
    {
        name: 'valeurs',
        path: '/nos-valeurs',
        component: Valeurs
    },
    {
        name: 'trouvez',
        path: '/trouvez-nous',
        component: Trouvez
    },
    {
        name: 'commandes',
        path: '/commandes',
        component: Commandes
    },
    {
        name: 'mentions',
        path: '/mentions-legales',
        component: Mentions
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
