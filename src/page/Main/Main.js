import styled from "styled-components";
import About from "./About";
import Slider from "./Slider";

function Main() {
  return (
    <StyledMain>
      <div className="mainContentWrap">
        <div className="sliderComponentWrap">
          <Slider />
        </div>
        <div className="aboutComponentWrap">
          <About />
        </div>
      </div>
    </StyledMain>
  );
}
export default Main;

const StyledMain = styled.div`
  @media screen and (min-width: 981px) {
    width: 100%;
    .mainContentWrap {
      width: 95%;
      margin: 0 auto;
      position: relative;
      .sliderComponentWrap {
        width: 100%;
        margin-bottom: 5%;
      }
      .aboutComponentWrap {
        width: 980px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    .mainContentWrap {
      /* width: 95%; */
      margin: 0 auto;
      position: relative;
      .sliderComponentWrap {
        width: 100%;
        margin-bottom: 5%;
      }
      .aboutComponentWrap {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    .mainContentWrap {
      width: 100%;
      margin: 0 auto;
      position: relative;
      .sliderComponentWrap {
        width: 100%;
        margin-bottom: 5%;
      }
      .aboutComponentWrap {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
`;
