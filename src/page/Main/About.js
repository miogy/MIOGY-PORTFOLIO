import styled from "styled-components";
import Category from "./about/Category";
import ContentData from "./ContentData";
import { useState } from "react";

function About() {
  const [tab, setTab] = useState(0);

  return (
    <AboutWrap>
      <div className="about-container">
        <h3>About</h3>
        <Category tab={tab} setTab={setTab} />
        <div className="contentContainer">{ContentData[tab]}</div>
      </div>
    </AboutWrap>
  );
}
export default About;

const AboutWrap = styled.div`
  @media screen and (min-width: 981px) {
    width: 100%;
    padding-bottom: 10%;
    h3 {
      float: left;
      font-size: 2.8em;
      font-weight: 300;
      letter-spacing: -0.12em;
      color: #999;
    }
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    padding-bottom: 10%;
    h3 {
      float: left;
      font-size: 2.8em;
      font-weight: 300;
      letter-spacing: -0.12em;
      color: #999;
    }
    .contentContainer {
      width: 580px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    padding-bottom: 10%;
    h3 {
      float: left;
      font-size: 2.8em;
      font-weight: 300;
      letter-spacing: -0.12em;
      color: #999;
    }
    .contentContainer {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    padding-bottom: 10%;
    h3 {
      float: left;
      font-size: 2.8em;
      font-weight: 300;
      letter-spacing: -0.12em;
      color: #999;
    }
    .contentContainer {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
