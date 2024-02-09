export default async function (layout: string) {
  switch (layout) {
    case "default":
      return await import("@/layouts/DefaultLayout.vue");
    case "auth":
      return await import("@/layouts/AuthLayout.vue");
    default:
      return await import("@/layouts/DefaultLayout.vue");
  }
}
