import postCssPlugin from "@deanc/esbuild-plugin-postcss";
import autoprefixer from "autoprefixer";
import type { BuildOptions } from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import publicDir from "esbuild-plugin-public-directory";
import path from "path";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";

import envPlugin from "../plugins/autoImportEnvPlugin";
import outdir from "./outdir";

/**
 * set build options
 */
const buildOptions: BuildOptions = {
  entryPoints: [
    path.resolve(__dirname, "../../", "src/index.tsx"), 
  ],
  outdir,
  bundle: true,
  sourcemap: true,
  platform: "browser",
  target: "esnext",
  format: "esm",
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".gif": "file",
  },
  plugins: [
    envPlugin,
    publicDir(),
    postCssPlugin({
      plugins: [
        postcssImport,
        postcssUrl({ url: "inline", module: true }),
        postcssNested,
        autoprefixer,
        tailwindcss,
      ],
    }),
    inlineImage(),
  ],
};

export default buildOptions;
