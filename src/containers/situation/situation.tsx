import React, { useState } from "react";
import Coupon from "@components/coupon";
import { parties } from "@data/mock";
import { useNavigate } from "@reach/router";
import final from "@images/situation.png";

const SituationPage = () => {
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
    navigate("/situation");
  };
  return (
    <div className="relative">
      <img src={final} alt="" />
    </div>
  );
};

export default SituationPage;
