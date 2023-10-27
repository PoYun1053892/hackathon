import React, { useState } from "react";
import high from "@images/high.svg";
import Slider from "react-slick";
import Coupon from "@components/coupon";
import { parties } from "@data/mock";
import { useNavigate } from "@reach/router";

const ChoosePage = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

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

  const handleOnGoToContest = () => {
    navigate("/contest");
  };

  return (
    <div className="bg-[#01151B] py-10">
      <div className="text-[#FFFFFF80] text-center mb-4">選擇隊伍</div>
      <div className="text-white-100 text-center text-4xl w-full">
        <div>{parties[current]?.label}</div>
        <Slider {...settings}>
          {parties.map((party, index) => {
            return (
              <div className="text-white-100 pt-4 pb-2 !flex items-center justify-center flex-col h-[250px] !w-[100px] mx-4 relative">
                {current === index && (
                  <img
                    src={high}
                    className="-left-3 absolute top-0 translate-y-1/2 w-full scale-150"
                    alt=""
                  />
                  // <div className="w-full h-2/3 blur-sm bg-white-100/30 opacity-50 clip-path absolute top-0 -left-3"></div>
                )}
                <img
                  src={party.images}
                  alt=""
                  className={`${
                    current === index ? "opacity-100" : "opacity-25"
                  } max-w-[125px]`}
                />
              </div>
            );
          })}
        </Slider>
        <div
          className="border border-white rounded-full mx-10 font-bold text-base p-3 bg-white-100/5 mb-7 hover:bg-white-70 transition-all duration-500 cursor-pointer"
          onClick={handleOnGoToContest}
        >
          加入此隊
        </div>
        <div className="bg-white-10 mx-4 pb-10 rounded-2xl">
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
          <div>
            <p className="text-white-100 text-2xl my-5">Bonus 最大獎勵</p>
            <div className="flex items-center justify-center mx-4 bg-white-80 p-2.5 rounded-md border border-white-100 shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
              <p className="text-4xl px-2.5 py-6 bg-white-30 rounded-md">
                $100,000
              </p>
              <div className="ml-3 text-left">
                <p className="text-base">鉅額獎金</p>
                <p className="text-s">只有獲勝隊伍可獲得 此獎金！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePage;
