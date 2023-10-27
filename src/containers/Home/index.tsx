import React, { Suspense } from "react";

const Home = React.lazy(() => import("@containers/Home/Home"));

const HomeLoadable = (props: any = {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Home {...props} />
    </Suspense>
  );
};
export default HomeLoadable;
