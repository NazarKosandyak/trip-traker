import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import { loadLayoutMiddleware } from "@/router/middleware/load-layout.middleware";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  await loadLayoutMiddleware(to);
});
export default router;
