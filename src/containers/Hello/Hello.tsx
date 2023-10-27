import type { ReactPage } from "@data/types/common";
import { navigate } from "@reach/router";
import React, { useEffect } from "react";

const Hello: ReactPage = () => {
  /** Get environment */
  useEffect(() => {
    console.log("env variable test:", process.env.BASE_URL);
  }, []);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="mx-3 text-gray-800 font-bold text-5xl">Happy coding.</h1>
      <button
        className="text-right mt-10 text-gray-500 underline"
        onClick={handleOnClick}
      >
        Go back
      </button>
    </div>
  );
};

export default Hello;
