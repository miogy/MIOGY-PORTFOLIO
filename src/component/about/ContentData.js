import styled from "styled-components";
import {
  MdOutlineLaptopMac,
  MdVideoCameraBack,
  MdVideoSettings,
  MdOutlineTabletMac,
  MdClass,
} from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiAdobe,
  SiSketchup,
} from "react-icons/si";
import ProjectCard from "./ProjectCard/ProjectCard";

function TechStack() {
  return (
    <ContentWrap>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          OS
        </dt>
        <dd className="contentText">macOS</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          UI
        </dt>
        <dd className="contentText">
          Html5, Css
          <span className="textSmall"> 디자인 작업 및 수정 가능 </span>
        </dd>
        <dd className="contentText"> Javascript, Jquery </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Framework
        </dt>
        <dd className="contentText">
          React js<span className="textSmall"> Project 작업 경험 </span>
        </dd>
        <dd className="contentText">
          Vue js<span className="textSmall"> Toy Project 작업경험 </span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Packages
        </dt>
        <dd className="contentText">Sass , styled-components</dd>
        <dd className="contentText">React-icons, React-router-dom, </dd>
        <dd className="contentText">
          swiper
          <span className="textSmall">프로젝트시 필요한 라이브러리 사용</span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Tools
        </dt>
        <dd className="contentText">
          Community: Trello, Notion, Slack, Zep, Zoom
        </dd>
        <dd className="contentText">Version Control Tool: Git</dd>
      </dl>
    </ContentWrap>
  );
}

function Workexperience() {
  return (
    <ContentWrap>
      <WorkexperienceContent>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <GiClothes className="titleIcon" />
            2011~2022
          </dt>
          <dd className="contentText">
            국내외 브랜드 원단 R & D 디자인 및 영업
          </dd>
        </dl>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <GiClothes className="titleIcon" />
            2018
          </dt>
          <dd>독일 전시 및 아트웍 디자인</dd>
        </dl>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <GiClothes className="titleIcon" />
            2016~2022.03
          </dt>
          <dd className="contentText"> 디자인 및 생산 총괄</dd>
        </dl>
      </WorkexperienceContent>
      <WorkexperienceContent>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <MdClass className="titleIcon" />
            2019~2021
          </dt>
          <dd className="contentText">
            한양 사이버 대학 뉴미디어 디자인학과
            <span className="textSmall contentBlock">
              웹디자인 및 UI/UX 디자인
            </span>
          </dd>
        </dl>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <MdClass className="titleIcon" />
            ~2022.06
          </dt>
          <dd className="contentText">
            메가 it 프론트엔드 과정 수료 및 UI 기획수료
            <span className="textSmall contentBlock">
              Html, Css, Javascript, Jquery, React, Vue, Figma, 반응형
            </span>
          </dd>
        </dl>
        <dl className="contentsContainer">
          <dt className="contentTitle">
            <MdClass className="titleIcon" />~ 2022.10
          </dt>
          <dd className="contentText">
            JUSTCODE 부트캠프 수료
            <span className="textSmall contentBlock">
              Html, Css, Javascript, React 과정 이수
            </span>
            <span className="textSmall">TeamProject</span>
          </dd>
        </dl>
      </WorkexperienceContent>
    </ContentWrap>
  );
}

function DesignSkill() {
  return (
    <ContentWrap>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <SiAdobe className="titleIcon" />
          그래픽
        </dt>
        <dd className="contentText">
          <SiAdobephotoshop className="titleIcon" />
          Photoshop,
          <SiAdobeillustrator className="titleIcon" />
          Illustrator
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdVideoSettings className="titleIcon" />
          영상편집
        </dt>
        <dd className="contentText">
          <SiAdobeaftereffects className="titleIcon" />
          After Effect,
          <SiAdobe className="titleIcon" />
          Animate,
          <MdVideoCameraBack className="titleIcon " />
          Movavi Video Editor
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineTabletMac className="titleIcon " />
          Web / App
        </dt>
        <dd className="contentText">
          <SiAdobexd className="titleIcon" />
          Adode XD,
          <SiFigma className="titleIcon" />
          Figma
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <SiSketchup className="titleIcon" />
          그외
        </dt>
        <dd className="contentText">
          <SiSketchup className="titleIcon" />
          SketchUp
          <span className="textSmall">3D설계도면</span>
        </dd>
        <dd className="contentText">ZBrush</dd>
      </dl>
    </ContentWrap>
  );
}

function Project() {
  return (
    <ContentWrap>
      <StyledProjectCard />
    </ContentWrap>
  );
}

function ToyProject() {
  return <ContentWrap>ToyProject</ContentWrap>;
}

const stackContent = {
  0: <TechStack />,
  1: <Workexperience />,
  2: <DesignSkill />,
  3: <Project />,
  4: <ToyProject />,
};
export default stackContent;

const ContentWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .contentsContainer {
    width: 50%;
    height: 120px;
    text-align: center;
    .contentTitle {
      padding: 0 20px 0 20px;
      text-align: start;
      font-size: 28px;
      margin-bottom: 6px;
      .titleIcon {
        padding-right: 6px;
      }
    }
    .contentText {
      width: 300px;
      display: inline-block;
      text-align: start;
      padding: 10px 0 0 100px;
      margin: 0;
      line-height: 30px;
      color: #444;
      .titleIcon {
        padding-right: 6px;
        padding-left: 6px;
      }
      .textSmall {
        font-size: 14px;
        margin-left: 6px;
        padding-right: 8px;
        padding-left: 3px;
        color: #888;
        border: 1px solid #999;
        line-height: 20px;
      }
      .contentBlock {
        display: inline-block;
      }
    }
  }
`;
const StyledProjectCard = styled(ProjectCard)`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const WorkexperienceContent = styled.div`
  width: 50%;
`;
