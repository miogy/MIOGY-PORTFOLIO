import About from "./About";
import Slider from "./Slider";
import styled from "styled-components";

const MainWrap = styled.div`
  padding: 0 5% 0 5%;
`;

function Main() {
  return (
    <MainWrap>
      <Slider />
      <About />
    </MainWrap>
  );
}
export default Main;
