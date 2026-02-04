import type { RouteConfig } from "@mateothegreat/svelte5-router";
import Home from "../pages/Home.svelte";
import Login from "../pages/Login.svelte";
import Register from "../pages/Register.svelte";



export const routes: RouteConfig[] = [
    { 
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: "/register",
        component: Register,
    }
];