import { build, BuildOptions } from "esbuild";

import metafilePlugin from "./plugins/metafilePlugin";
import commonBuildOption from "./utils/commonBuildOption";

const start = Date.now();

const buildOptions: BuildOptions = {
  ...commonBuildOption,
  assetNames: "assets/[name]-[hash]", //-[hash]
  chunkNames: "chunks/[name]-[hash]",
  minify: true,
  treeShaking: true,
  splitting: true,
  metafile: true,
  plugins: [...commonBuildOption.plugins, metafilePlugin],
};

const buildApp = async () => {
  try {
    await build(buildOptions);
    console.log(`✨  Done in ${(Date.now() - start) / 1000}s`);
  } catch (e) {
    process.exit(1);
  }
};

buildApp();
