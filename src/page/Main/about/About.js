import styled from "styled-components";
import Category from "./Category";
import DesignSkill from "./DesignSkill";
import Workexperience from "./Workexperience";
import TechStack from "./TechStack";
import ProjectCard from "./ProjectCard";
import ToyProjectCard from "./ToyProjectCard";

import { useState } from "react";

function About({ projectData }) {
  const [tab, setTab] = useState(0);

  const categoryTab = {
    0: <TechStack />,
    1: <DesignSkill />,
    2: <Workexperience />,
    3: <ProjectCard />,
    4: <ToyProjectCard projectData={projectData} />,
  };

  return (
    <AboutWrap>
      <div className="aboutContainer">
        <h3>About</h3>
        <Category tab={tab} setTab={setTab} />
        <div className="contentContainer">{categoryTab[tab]}</div>
      </div>
    </AboutWrap>
  );
}
export default About;

const AboutWrap = styled.div`
  @media screen and (min-width: 1330px) {
    width: 100%;
    padding-bottom: 10%;
    .aboutContainer {
      h3 {
        float: left;
        font-size: 42px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
    }
  }
  @media screen and (max-width: 1329px) and (min-width: 1100px) {
    width: 100%;
    padding-bottom: 10%;
    .aboutContainer {
      h3 {
        float: left;
        font-size: 40px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
    }
  }
  @media screen and (max-width: 1099px) and (min-width: 980px) {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 10%;
    .aboutContainer {
      width: 100%;
      margin: 0 auto;
      h3 {
        padding-left: 40px;
        float: left;
        font-size: 40px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
      .contentContainer {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 979px) and (min-width: 780px) {
    width: 100%;
    margin: 0 auto;
    .aboutContainer {
      width: 100%;
      margin: 0 auto;
      h3 {
        margin: 20px 0 20px 0px;
        padding-left: 40px;
        float: left;
        font-size: 34px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
      .contentContainer {
        width: 100%;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 779px) and (min-width: 580px) {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 10%;
    .aboutContainer {
      width: 100%;
      margin: 0 auto;
      h3 {
        margin: 20px 0 20px 0px;
        float: left;
        font-size: 28px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }

      .contentContainer {
        width: 100%;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 580px) and (min-width: 380px) {
    width: 100%;
    margin: 0 auto;
    .aboutContainer {
      width: 100%;
      margin: 0 auto;
      h3 {
        margin: 8px;
        float: left;
        font-size: 26px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
      .contentContainer {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 379px) and (min-width: 230px) {
    width: 100%;
    margin: 0 auto;
    .aboutContainer {
      width: 100%;
      margin: 0 auto;
      h3 {
        margin: 3%;
        float: left;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: -0.12em;
        color: #999;
      }
      .contentContainer {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
