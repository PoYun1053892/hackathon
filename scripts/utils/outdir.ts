import path from "path";

const outdir = path.resolve(
  __dirname,
  "../../",
  process.env?.BUILD_FOLDER || "build"
);

export default outdir;
