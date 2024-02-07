import { defineConfig } from "vite";
//@ts-ignore
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    /** If you set esmExternals to true, this plugins assumes that
         all external dependencies are ES modules */

    commonjsOptions: {
      esmExternals: true,
    },
  },
});
