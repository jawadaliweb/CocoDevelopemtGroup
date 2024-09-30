// src/routes/routes.ts
import React from "react";
import ProjectsPage from "../Pages/ProjectsPage";
import ProjectDetail from "../Pages/ProjectsDetailPage";
const HomePage = React.lazy(() => import("../Pages/HomePage"));

export interface AppRoute {
    name: string;
    path: string;
    component: React.ComponentType;
}

// Define the routes, but don't import them into NavLinks
export const routes: AppRoute[] = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },
    {
        name: "Projects",
        path: "/projects",
        component: ProjectsPage,
    },
    {
        name: "ProjectsSingle",
        path: "/projects/:slug",
        component: ProjectDetail,
    }
];
