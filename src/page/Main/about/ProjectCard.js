import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import ProjectData from "./ProjectData";

import styled from "styled-components";

function ProjectCard() {
  const [project, setProject] = useState([]);
  const [projectTab, setProjectTab] = useState(0);
  const [prjModal, setPrjModal] = useState(false);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const scrollRef = useRef(null);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
        console.log(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
        console.log(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);
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
    <StyledProject
      onMouseDown={onDragStart}
      onMouseMove={onThrottleDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
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
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setProjectTab(projectData.id);
                      setPrjModal(true);
                    }}
                  >
                    프로젝트 소개
                  </span>
                </dt>
                <dd className="cardcontainer">
                  <p className="cardTitle">{projectData.title}</p>
                  <p>
                    <button
                      className="cardBtn"
                      onClick={() => {
                        window.location.href = `${projectData.readme}`;
                      }}
                    >
                      Readme
                    </button>
                    <button
                      className="cardBtn"
                      onClick={() => {
                        window.location.href = `${projectData.blog}`;
                      }}
                    >
                      Blog
                    </button>
                  </p>
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
        <div className="prjModalWrap">
          <div className="projectCardModal">{ProjectCardTab[projectTab]}</div>
        </div>
      ) : null}
    </StyledProject>
  );
}
export default ProjectCard;

const StyledProject = styled.div`
  @media screen and (min-width: 1100px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
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
          width: 100%;
          p {
            margin-right: 10px;
            margin-left: 10px;
          }
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
            justify-content: center;
            align-items: center;
            .cardTitle {
              font-size: 20px;
              font-weight: 600;
            }
            .projectLink {
              cursor: pointer;
            }
            .cardBtn {
              width: 68px;
              height: 30px;
              border: 1px solid lightgray;
              border-radius: 5px;
              background-color: #fff;
              margin: 3px;
              cursor: pointer;
              &:hover {
                font-weight: 600;
              }
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
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  }

  @media screen and (max-width: 1099px) and (min-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
      margin-right: 20px;
      border: 1px solid lightgray;
      border-radius: 15px;
      .cardWrap {
        padding: 0 6px 0 6px;
        .cardContainer {
          width: 100%;
          .projectImg {
            position: relative;
            .imgContent {
              width: 400px;
              height: 240px;
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
            justify-content: center;
            align-items: center;
            p {
              margin: 0 5px 0 5px;
            }
            .cardTitle {
              font-size: 18px;
              font-weight: 600;
            }
            .projectLink {
              font-size: 16px;
              cursor: pointer;
            }
            .cardBtn {
              width: 60px;
              height: 26px;
              border: 1px solid lightgray;
              border-radius: 5px;
              background-color: #fff;
              margin: 3px;
              cursor: pointer;
              &:hover {
                font-weight: 600;
              }
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
      z-index: 10;
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
      margin-right: 20px;
      border: 1px solid lightgray;
      border-radius: 15px;
      .cardWrap {
        padding: 0 6px 0 6px;
        .cardContainer {
          width: 100%;
          .projectImg {
            position: relative;
            .imgContent {
              width: 360px;
              height: 200px;
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
            justify-content: center;
            align-items: center;
            p {
              margin: 0 3px 0 3px;
            }
            .cardTitle {
              font-size: 14px;
              font-weight: 600;
            }
            .projectLink {
              font-size: 14px;
              cursor: pointer;
            }
            .cardBtn {
              width: 56px;
              height: 22px;
              font-size: 12px;
              border: 1px solid lightgray;
              border-radius: 5px;
              background-color: #fff;
              margin: 3px;
              cursor: pointer;
              &:hover {
                font-weight: 600;
              }
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
      z-index: 10;
    }
  }
`;