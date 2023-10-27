import type { ReactPage } from "@data/types/common";
import { IMAGES } from "@jk/jui";
import React from "react";

const NotFound: ReactPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img width="100" src={IMAGES.STATUS_MAINTENANCE} />
      <div className="ml-2 text-gray-800 text-5xl">404</div>
    </div>
  );
};

export default NotFound;
