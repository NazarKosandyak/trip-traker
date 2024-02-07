export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/pages/home-view/Index.vue"),
    meta: {
      requiredAuth: true,
    },
  },
];
