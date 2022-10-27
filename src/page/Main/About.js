import styled from "styled-components";
import Category from "../../component/about/Category";
import ContentData from "./ContentData";
import { useState } from "react";

function About() {
  const [tab, setTab] = useState(0);

  return (
    <AboutWrap>
      <div className="about-container">
        <h3>About</h3>
        <Category tab={tab} setTab={setTab} />
        <AboutContent>{ContentData[tab]}</AboutContent>
      </div>
    </AboutWrap>
  );
}
export default About;

const AboutWrap = styled.div`
  /* position: absolute;
  top: 890px;
  left: 0;
  width: 100%;
  padding-top: 36px; s
  padding-bottom: 36px; */
  /* background-color: #fff; */
  .about-container {
    /* width: 58%;
    margin: 0 auto;
    text-align: start;
    h3 {
      font: 36px/47px "나눔고딕", sans-serif;
      letter-spacing: -0.12em;
      color: #555;
    } */
  }
`;
const AboutContent = styled.div`
  /* margin: 0 auto;
  text-align: start; */
`;
