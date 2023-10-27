import PostInfoTest from "./PostInfoTest";

/** active mock api */

let mock = {};

if (process.env.APP_ENV === "development") {
  mock = {
    PostInfoTest: {
      data: PostInfoTest,
      status: 200,
    },
  };
}

export default mock;
