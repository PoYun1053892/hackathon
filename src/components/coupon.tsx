import React from "react";
import couponEdge from "@images/couponedge.svg";

const Coupon = ({
  prizeBgColor,
  prizeColor,
  prize,
  title,
  subtitle,
  isDisabled,
  btn,
}) => {
  return (
    <div className="coupon flex items-center justify-between m-4 bg-white-100 rounded-md text-black-100 h-[100px]">
      <div
        className="prize text-3xl px-4 pt-5 pb-6 rounded-md text-white-100 m-2"
        style={{ backgroundColor: prizeBgColor }}
      >
        <p className="text-4xl" style={{ color: prizeColor }}>
          <span className="text-2xl">$</span>
          {prize}
        </p>
      </div>
      <div className="content text-left mr-2.5">
        <p className="text-base font-bold">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>
      <div className="button bg-[#D5BAFF] relative h-full w-full max-w-[100px] flex items-center justify-center rounded-r-md">
        <img src={couponEdge} alt="" className="absolute left-0" />
        <div
          className={`text-xs border py-1.5 px-3 rounded-full mx-1.5 font-bold ${
            isDisabled
              ? "text-black-30 border-black-30"
              : "text-black-100 border-black-100 hover:bg-white-30 transition-all duration-300"
          }`}
        >
          {btn}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
