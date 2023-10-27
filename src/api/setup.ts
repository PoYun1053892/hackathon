import { setupJkApi } from "@jk/api";

import mock from "./mock";
import protocol from "./protocol";
import http from "./router/http";

const setup = (): void => {
  setupJkApi({
    protocol,
    engine: {
      http,
    },
    mock,
  });
};

export default setup;
