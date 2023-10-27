import React, { useState } from "react";
import Coupon from "@components/coupon";
import { parties } from "@data/mock";
import angel from "@images/angel.png";
import devil from "@images/devil.png";
import human from "@images/human.png";
import moneyBag from "@images/money.png";
import { useNavigate } from "@reach/router";

const ContestPage = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const party_rate = {
    angel: 70,
    devil: 20,
    human: 30,
  };

  const settings = {
    className: "mb-4",
    dots: false,
    infinite: true,
    centerPadding: "50px",
    speed: 100,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrent(newIndex);
    },
  };

  const handleOnGoTofinal = () => {
    navigate("/final");
  };
  return (
    <div className="bg-[#01151B] py-4 text-white-100 min-h-screen">
      <div className="px-6 mt-5 mb-10">
        <div className="text-3xl">天使隊 目前領先！</div>
        <div className="text-white-70">天使隊的消費總額佔整體消費 70 %</div>
      </div>
      <div className="track relative mb-10">
        <div>
          <div className="h-10 bg-white-10 relative">
            <img
              src={devil}
              alt=""
              className="w-[50px] absolute -top-[20px] left-1/4 -translate-x-1/2 z-10"
            />
            <div
              className="h-10 bg-white-10 clip-path absolute left-0 flex items-center"
              style={{ width: `25%` }}
            >
              <p className="text-2xl -skew-x-[35deg] font-bold px-2.5">
                {party_rate.devil}%
              </p>
            </div>
          </div>
          <div className="h-10 bg-white-20 relative">
            <img
              src={angel}
              alt=""
              className="w-[70px] absolute -top-[50px] left-1/2 -translate-x-1/2"
            />
            <div
              className="h-10 bg-white-20 clip-path absolute left-0 flex items-center"
              style={{ width: `50%` }}
            >
              <p className="text-2xl -skew-x-[35deg] font-bold px-2.5">
                {party_rate.angel}%
              </p>
            </div>
          </div>
          <div className="h-10 bg-white-10 relative">
            <img
              src={human}
              alt=""
              className="w-[50px] absolute -top-[20px] left-[28%] -translate-x-1/2"
            />
            <div
              className="h-10 bg-white-10 clip-path absolute left-0 flex items-center"
              style={{ width: `30%` }}
            >
              <p className="text-2xl -skew-x-[35deg] font-bold px-2.5">
                {party_rate.human}%
              </p>
            </div>
          </div>
        </div>
        <div className="trapezoid bg-[#24008B] h-full max-w-[180px] w-full absolute right-0 top-0 z-10"></div>
        <p className="absolute right-0 bottom-4 z-10 -translate-x-[20%] -skew-x-[25deg] text-2xl">
          $ 100,000
        </p>
        <img
          className="absolute right-0 top-0 -translate-y-1/2 z-10 w-[120px]"
          onClick={handleOnGoTofinal}
          src={moneyBag}
          alt=""
        />
      </div>
      <div className="mx-4 pb-10 rounded-2xl text-center bg-white-10">
        <div className="text-xl py-5">{parties[current]?.label}獎勵清單</div>
        {parties[current]?.bonus.map((item) => (
          <Coupon
            prize={item?.prize}
            title={item?.title}
            subtitle={item?.subtitle}
            prizeBgColor={item?.prizeBgColor}
            prizeColor={item?.prizeColor}
            isDisabled={item?.isDisabled}
            btn={item?.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default ContestPage;
