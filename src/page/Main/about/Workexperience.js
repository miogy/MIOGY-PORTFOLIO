import "./contents.scss";
import { GiClothes } from "react-icons/gi";
import { MdClass } from "react-icons/md";

function Workexperience() {
  return (
    <div className="contentWrap">
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2011~2022
        </dt>
        <dd className="contentText">국내외 브랜드 원단 R & D 디자인 및 영업</dd>
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
    </div>
  );
}
export default Workexperience;
