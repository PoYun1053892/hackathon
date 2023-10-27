import redux from "@data/redux";
import { authSelector } from "@data/slice/authSlice";
import type { ReactPage } from "@data/types/common";
import useNavigate from "@hooks/useNavigate";
import { Api } from "@jk/api";
import { GrowingSpinner } from "@jk/jui";
import type { IJkuseNetworkProps } from "@jk/use/core/hooks/useNetwork";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import title1 from "@images/title1.png";
import title2 from "@images/title2.png";
import fire from "@images/fire.png";
import pig from "@images/pig.png";

const Home: ReactPage<IJkuseNetworkProps> = ({ network }) => {
  const token = useSelector(authSelector.token);
  const { navigateTo } = useNavigate();

  useEffect(() => {
    if (network) {
      // network.setShowErrorWrapper(false);
    }
  }, [network]);

  /** Doing initial */

  useEffect(() => {
    redux.setToken("abc");

    // call api test
    handleCallApi();
  }, []);

  /** Get token */

  useEffect(() => {
    if (token) console.log("token save:", token);

    console.log("env variable test:", process.env.BASE_PATH);
  }, [token]);

  const handleCallApi = async () => {
    const { error, data } = await Api.PostInfoTest();
    if (error) console.log("Api Error:", error);
    else console.log("Api Success", data);
  };

  const handleOnClick = () => {
    navigateTo("/hello");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-red-100">
      <div className="title">
        <img src={title1} alt="" />
        <img src={title2} alt="" />
      </div>
      <div className="bannerPig relative border w-full">
        <img src={fire} alt="" />
        <img
          src={pig}
          alt=""
          className="absolute z-10 w-2/3 left-1/2 -translate-x-1/2 bottom-0"
        />
      </div>
      <div className="mx-[15px]">
        <p>遊戲說明</p>
      </div>
    </div>
  );
};

export default Home;
