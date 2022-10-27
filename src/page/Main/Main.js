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
  width: 100%;
  .mainContentWrap {
    @media screen and (min-width: 1100px) {
      width: 1330px;
      margin: 0 auto;
      position: relative;
      .sliderComponentWrap {
        width: 100%;
        /* background-color: #999; */
      }
      .aboutComponentWrap {
        width: 980px;
        margin: 0 auto;
        margin-bottom: 200px;
        /* background-color: #333; */
      }
    }
  }
`;
