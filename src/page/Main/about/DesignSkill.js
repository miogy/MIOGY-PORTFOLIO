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
    </div>
  );
}
export default DesignSkill;
