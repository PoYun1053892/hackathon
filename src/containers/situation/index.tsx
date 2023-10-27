import React, { Suspense } from "react";

const Situation = React.lazy(() => import("@containers/situation/situation"));

const HomeLoadable = (props: any = {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Situation {...props} />
    </Suspense>
  );
};
export default HomeLoadable;
