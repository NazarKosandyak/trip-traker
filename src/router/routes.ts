import { AppLayoutEnum } from "@/layouts/layout.types";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/HomePage.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/pages/auth/AuthPage.vue"),
    meta: {
      layout: AppLayoutEnum.auth,
    },
    children: [
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/pages/auth/login/LoginPage.vue"),
      },
      {
        path: "/auth/register",
        name: "register",
        component: () => import("@/pages/auth/register/RegisterPage.vue"),
      },
    ],
    redirect: { name: "login" },
  },
];
