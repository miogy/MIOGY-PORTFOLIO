import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";

import ImgSliderData from "./ImgSliderData";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <StyledSwiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false, //스와이프 후 자동재생
      }} //자동 시간
      loop={true}
      height={800}
      pagination={{ type: "fraction" }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]} //modules에 기능 넣기
    >
      {ImgSliderData?.map((slideData) => {
        // console.log(slideData);
        return (
          <SwiperSlide key={slideData.id}>
            <NavLink to={slideData.url}>
              <img src={slideData.src} alt="pic" className="sliderImg" />
            </NavLink>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
}
export default Slider;

const StyledSwiper = styled(Swiper)`
  @media screen and (min-width: 981px) {
    width: 90%;
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    .sliderImg {
      width: 100%;
    }
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    .sliderImg {
      width: 100%;
    }
  }
`;
