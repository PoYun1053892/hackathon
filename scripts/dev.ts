import browserSync from "browser-sync";
import { build, BuildOptions } from "esbuild";
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";
import commonBuildOption from "./utils/commonBuildOption";
import { port, url } from "./utils/location";

let watchCss = false;

const Fastify = fastify();

const bs = browserSync.create();

const buildOptions: BuildOptions = {
  ...commonBuildOption,
  watch: {
    onRebuild: (error, result) => {
      if (error) {
        console.error("watch rebuild failed:", error);
      } else {
        watchCss = true;
        console.log("watch rebuild succeeded: ", result);
        bs.reload();
      }
    },
  },
};

const devApp = async () => {
  try {
    await build(buildOptions);

    Fastify.register(fastifyStatic, {
      prefix: process.env?.BASE_PATH || "/",
      root: commonBuildOption?.outdir,
    });

    Fastify.listen(port, (err, address) => {
      if (err) throw err;
      console.log(`Server is now listening on ${address}`);
    });

    // make the spa reload on the same page
    Fastify.setNotFoundHandler((_, res) => {
      res.sendFile("index.html");
    });

    bs.init({
      proxy: url,
      ui: false,
    });

    bs.watch(
      path.resolve(__dirname, "../", "src/styles/*.css"),
      null,
      async (): Promise<void> => {
        if (!watchCss) return;
        await build(commonBuildOption);

        console.log("watch css rebuild succeeded");
        bs.reload();
      }
    );
  } catch (e) {
    process.exit(1);
  }
};

devApp();
