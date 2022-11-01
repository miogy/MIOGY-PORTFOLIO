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
  @media screen and (min-width: 1330px) {
    width: 100%;
    .mainContentWrap {
      width: 90%;
      margin: 0 auto;
      position: relative;
      .sliderComponentWrap {
        width: 100%;
      }
      .aboutComponentWrap {
        width: 1100px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 1329px) and (min-width: 990px) {
    width: 100%;
    .mainContentWrap {
      width: 100%;
      .sliderComponentWrap {
        width: 100%;
      }
      .aboutComponentWrap {
        width: 980px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 989px) and (min-width: 580px) {
    width: 100%;
    .mainContentWrap {
      width: 100%;
      .sliderComponentWrap {
        width: 100%;
      }
      .aboutComponentWrap {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    .mainContentWrap {
      width: 100%;

      .sliderComponentWrap {
        width: 100%;
      }
      .aboutComponentWrap {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
`;
