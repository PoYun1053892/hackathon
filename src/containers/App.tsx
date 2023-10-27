import "../styles/global.css";

import React from "react";

import setupAPI from "@api/setup";
import Route from "@components/Route";
import Hello from "@containers/Hello";
import Home from "@containers/Home";
import Choose from "@containers/Choose";
import Contest from "@containers/Contest";
import Final from "@containers/Final";
import Situation from "@containers/situation";
import NotFound from "@containers/NotFound";
import type { ReactPage } from "@data/types/common";
import { Router } from "@reach/router";

setupAPI();

const App: ReactPage = (props) => {
  return (
    <Router basepath={process.env.BASE_PATH || "/"}>
      <Route path="/" pageComponent={<Home />} pageProps={props} />
      <Route path="/hello" pageComponent={<Hello />} pageProps={props} />
      <Route path="/choose" pageComponent={<Choose />}></Route>
      <Route path="/contest" pageComponent={<Contest />}></Route>
      <Route path="/final" pageComponent={<Final />}></Route>
      <Route path="/situation" pageComponent={<Situation />}></Route>
      <Route pageComponent={<NotFound />} pageProps={props} default />
    </Router>
  );
};

export default App;
