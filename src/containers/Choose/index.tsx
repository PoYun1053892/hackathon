import React, { Suspense } from "react";

const Choose = React.lazy(() => import("@containers/Choose/choose"));

const HomeLoadable = (props: any = {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Choose {...props} />
    </Suspense>
  );
};
export default HomeLoadable;
