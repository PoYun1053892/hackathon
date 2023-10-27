import fastify from "fastify";
import fastifyStatic from "fastify-static";
import open from "open";

import { port, url } from "./utils/location";
import outdir from "./utils/outdir";

const Fastify = fastify();

Fastify.register(fastifyStatic, {
  prefix: process.env?.BASE_PATH || "/",
  root: outdir,
});

Fastify.listen(port, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
  open(url);
});
