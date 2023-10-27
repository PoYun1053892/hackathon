import path from "path";

const externalizeDep = {
  name: "externalize-deps",
  setup(build) {
    // 如果返回值 undefined，就用下一個 onResolve 的註冊回調，反之不会向下執行
    build.onResolve({ filter: /.*/ }, (args) => {
      const id = args.path;
      // 如果是外部依賴
      if (id[0] !== "." && !path.isAbsolute(id)) {
        return {
          external: true,
        };
      }
    });
  },
};

export default externalizeDep;
