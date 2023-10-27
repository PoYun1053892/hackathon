import React, { Suspense } from "react";

const Hello = React.lazy(() => import("@containers/Hello/Hello"));

const HelloLoadable = (props: any = {}) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Hello {...props} />
    </Suspense>
  );
};
export default HelloLoadable;
