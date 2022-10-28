import "./contents.scss";
import { MdOutlineLaptopMac } from "react-icons/md";

function TechStack() {
  return (
    <div className="contentWrap">
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
        <dd className="contentText">
          Sass , styled-components
          <span className="textSmall">Style</span>
        </dd>
        <dd className="contentText">
          React-router-dom,
          <span className="textSmall">Routing</span>{" "}
        </dd>
        <dd className="contentText">
          React-icons, swiper
          <span className="textSmall">Image slider</span>
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

      <dl className="contentsContainer"></dl>
    </div>
  );
}
export default TechStack;
