import React from "react";
import SlickSlider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const Slider = ({ companyId, component: Component, info }) => {
  const id = uuidv4();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const items = info.map((i) => (
    <Link
      className="culina--link"
      key={id}
      to={`/companies/${companyId}/user/${i.userId}`}
    >
      <Component key={id} info={i} />
    </Link>
  ));

  return (
    <SlickSlider className="hey" {...settings}>
      {items}
    </SlickSlider>
  );
};

export default Slider;
