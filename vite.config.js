import path from "path";
import watchAndRun from "vite-plugin-watch-and-run";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    watchAndRun([
      {
        name: "build wasm",
        watchKind: ["add", "change", "unlink"],
        watch: path.resolve("wasm/src/**/*"),
        run: "npm run build:wasm",
        delay: 300,
      },
    ]),
  ],
};

export default config;
