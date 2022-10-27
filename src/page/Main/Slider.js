import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import ImgSliderData from "./ImgSliderData";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <Swiper
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
              <img src={slideData.src} alt="pic" />
            </NavLink>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Slider;

// const StyledSwiper = styled(Swiper)`
//   @media screen and (min-width: 1100px) {
//     //styled-components적용시 이름을 같이 지정하고 styled(Swiper)로 사용함
//     position: absolute;
//     top: 0;
//     left: 50%;
//     transform: translate(-50%, 0);
//     width: 100%;
//     height: 900px;
//     margin: 0 auto;
//     background-size: contain cover;
//     /* background-position: center; */
//     .swiper-button-next {
//       //브라우저에서 클래스명 확인후 적용
//       top: 50%;
//       transform: translate(0, -50%);
//       padding: 30% 10% 20% 10%;
//       color: #fff;
//       opacity: 0.8;
//       font-weight: bold;
//     }
//     .swiper-button-prev {
//       top: 50%;
//       transform: translate(0, -50%);
//       padding: 30% 10% 20% 10%;
//       color: #fff;
//       opacity: 0.8;
//       font-weight: bold;
//     }
//     .swiper-pagination {
//       margin-bottom: 30px;
//       font-size: 1.2em;
//     }
//   }
// `;
// const StyledSlide = styled(SwiperSlide)`
//   @media screen and (min-width: 1100px) {
//     width: 100%;
//     height: 100%;
//     img {
//       width: 100%;
//       /* height: 100%; */
//     }
//   }
// `;
