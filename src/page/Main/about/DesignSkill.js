import "./contents.scss";

import {
  MdVideoCameraBack,
  MdVideoSettings,
  MdOutlineTabletMac,
} from "react-icons/md";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiAdobe,
  SiSketchup,
} from "react-icons/si";

function DesignSkill() {
  return (
    <div className="contentWrap">
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <SiAdobe className="titleIcon" />
          그래픽
        </dt>
        <dd className="contentText">
          <p className="skillContentWrap">
            <SiAdobephotoshop className="titleIcon" />
            Photoshop,
          </p>
          <p className="skillContentWrap">
            <SiAdobeillustrator className="titleIcon" />
            Illustrator
          </p>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdVideoSettings className="titleIcon" />
          영상편집
        </dt>
        <dd className="contentText">
          <p className="skillContentWrap">
            <SiAdobeaftereffects className="titleIcon" />
            After Effect,
          </p>
          <p className="skillContentWrap">
            <SiAdobe className="titleIcon" />
            Animate,
          </p>
          <p className="skillContentWrap">
            <MdVideoCameraBack className="titleIcon " />
            Movavi Video Editor
          </p>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineTabletMac className="titleIcon " />
          Web / App
        </dt>
        <dd className="contentText">
          <p className="skillContentWrap">
            <SiAdobexd className="titleIcon" />
            Adode XD,
          </p>
          <p className="skillContentWrap">
            <SiFigma className="titleIcon" />
            Figma
          </p>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <SiSketchup className="titleIcon" />
          그외
        </dt>
        <dd className="contentText">
          <p className="skillContentWrap">
            <SiSketchup className="titleIcon" />
            SketchUp
            <span className="textSmall">3D설계도면</span>
          </p>
          <p className="skillContentWrap">ZBrush</p>
        </dd>
      </dl>
    </div>
  );
}
export default DesignSkill;
