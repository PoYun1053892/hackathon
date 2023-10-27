const envPlugin = {
  name: "auto-import-env",
  setup(build) {
    const options = build.initialOptions;
    options.define = options.define || {};

    Object.entries(process.env).map((cur) => {
      options.define["process.env." + cur[0]] = `'${cur[1]}'`;
    }, {});
  },
};

export default envPlugin;
