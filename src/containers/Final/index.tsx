import React, { Suspense } from "react";

const Final = React.lazy(() => import("@containers/Final/Final"));

const HomeLoadable = (props: any = {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Final {...props} />
    </Suspense>
  );
};
export default HomeLoadable;
