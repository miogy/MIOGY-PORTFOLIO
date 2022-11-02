import "./contents.scss";
import { GiClothes } from "react-icons/gi";
import { MdClass } from "react-icons/md";

function Workexperience() {
  return (
    <div className="contentWrap">
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdClass className="titleIcon" />
          ~2022.10
        </dt>
        <dd className="contentText">
          경험 : TeamProject <br />
          (영화사이트, E-commerce)
          <span className=" contentBlock">
            Html, Css, Javascript, React, Typescript
          </span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdClass className="titleIcon" />
          ~2022.06
        </dt>
        <dd className="contentText">
          경험 : ToyProject
          <span className="contentBlock">
            Html, Css, Javascript, Jquery, React,
            <br />
            Vue, Figma, 반응형
          </span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdClass className="titleIcon" />
          2019~2021
        </dt>
        <dd className="contentText">
          한양 사이버 대학 뉴미디어 디자인학과
          <span className=" contentBlock">웹디자인 및 UI/UX 디자인</span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2016~2022.03
        </dt>
        <dd className="contentText"> 디자인 및 생산 총괄</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2018
        </dt>
        <dd className="contentText">독일 전시 및 아트웍 디자인</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2011~2022
        </dt>
        <dd className="contentText">국내외 브랜드 원단 R & D 디자인 및 영업</dd>
      </dl>
    </div>
  );
}
export default Workexperience;
