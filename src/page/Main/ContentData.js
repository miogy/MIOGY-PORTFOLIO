import DesignSkill from "./about/DesignSkill";
import Workexperience from "./about/Workexperience";
import TechStack from "./about/TechStack";
import ProjectCard from "./about/ProjectCard";
import "./about/contents.scss";

function Project() {
  return (
    <div className="contentWrap">
      <ProjectCard />
    </div>
  );
}

function ToyProject() {
  return <div className="contentWrap">ToyProject</div>;
}

const stackContent = {
  0: <TechStack />,
  1: <Workexperience />,
  2: <DesignSkill />,
  3: <Project />,
  4: <ToyProject />,
};
export default stackContent;
