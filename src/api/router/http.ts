import { Router } from "@jk/api";

const API_HOST = process.env.API_HOST;

const Http = (): void => {
  Router.group(
    () => {
      Router.post("PostInfoTest", `${API_HOST}/PostInfoTest`);
    },
    (urlParams: { [key: string]: string | number } = {}) => ({
      urlParams,
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
};

export default Http;
