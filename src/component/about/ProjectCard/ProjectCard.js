import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import ProjectData from "./ProjectData";

import styled from "styled-components";

function ProjectCard() {
  const [project, setProject] = useState([]);
  const [projectTab, setProjectTab] = useState(0);
  const [prjModal, setPrjModal] = useState(false);

  const ProjectCardTab = {
    0: (
      <ProjectData
        projectTab={projectTab}
        setPrjModal={setPrjModal}
        project={project.content}
      />
    ),
    1: (
      <ProjectData
        projectTab={projectTab}
        setPrjModal={setPrjModal}
        project={project.content}
      />
    ),
  };

  useEffect(() => {
    fetch("/data/projectData.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);
  return (
    <StyledProject>
      {/* {console.log(project)} */}
      {project.project?.projectMain?.map((projectData) => {
        return (
          <div className="projectWrap" key={projectData.id}>
            {/* {console.log(projectData)} */}
            <div className="cardWrap">
              <dl className="cardContainer">
                <dt className="projectImg">
                  <img
                    src={projectData.src}
                    className="imgContent"
                    alt="projectImg"
                  />

                  <span
                    className="projectPage"
                    onClick={() => {
                      // window.scrollTo({ top: 0, behavior: "smooth" });
                      setProjectTab(projectData.id);
                      setPrjModal(true);
                    }}
                  >
                    프로젝트 소개
                  </span>
                </dt>
                <dd className="cardcontainer">
                  <p className="cardTitle">{projectData.title}</p>
                  <p
                    className="projectLink"
                    onClick={() => {
                      window.location.href = `${projectData.url}`;
                    }}
                  >
                    <AiFillPlayCircle /> 시연영상보기
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        );
      })}
      {prjModal === true ? (
        <div className="projectCardModal">{ProjectCardTab[projectTab]}</div>
      ) : null}
    </StyledProject>
  );
}
export default ProjectCard;

const StyledProject = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .projectWrap {
    width: 600px;
    margin-right: 30px;
    border: 1px solid lightgray;
    border-radius: 15px;
    .cardWrap {
      .cardContainer {
        margin: 0 20px 0 20px;
        padding: 20px;
        .projectImg {
          position: relative;
          .imgContent {
            width: 500px;
            height: 300px;
          }
          .projectPage {
            width: 160px;
            height: 30px;
            position: absolute;
            top: 50%;
            left: 35%;
            border: 1px solid lightgray;
            border-radius: 5px;
            background-color: #fff;
            display: none;
            cursor: pointer;
          }
          &:hover .projectPage {
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
          }
        }
        .cardcontainer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .cardTitle {
          }
          .projectLink {
            cursor: pointer;
          }
        }
      }
    }
  }
  .projectCardModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
