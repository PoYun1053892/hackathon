import fs from "fs";

import outdir from "../utils/outdir";

const metafilePlugin = {
  name: "metafileWriter",
  setup(build) {
    build.onEnd((result) => {
      if (result.errors.length === 0) {
        fs.writeFileSync(
          outdir + "/metafile.json",
          JSON.stringify(result.metafile)
        );
      }
    });
  },
};

export default metafilePlugin;
