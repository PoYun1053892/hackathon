import React, { Suspense } from "react";

const NotFound = React.lazy(() => import("@containers/NotFound/NotFound"));

const NotFoundLoadable = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <NotFound />
    </Suspense>
  );
};
export default NotFoundLoadable;
