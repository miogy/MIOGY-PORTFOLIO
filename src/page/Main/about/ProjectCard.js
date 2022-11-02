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
        <div className="projectCardModal">{ProjectCardTab[projectTab]}</div>
      ) : null}
    </StyledProject>
  );
}
export default ProjectCard;

const StyledProject = styled.div`
  @media screen and (min-width: 1330px) {
    width: 100%;
    padding-top: 60px;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
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
              color: #333;
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
      height: 90%;
      padding: 0;
      background-color: #fff;
      z-index: 100;
      padding-top: 6%;
    }
  }
  @media screen and (max-width: 1329px) and (min-width: 980px) {
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
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
              color: #333;
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
      height: 90%;
      padding: 0;
      background-color: #fff;
      z-index: 100;
      padding-top: 6%;
    }
  }
  @media screen and (max-width: 979px) and (min-width: 580px) {
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
      padding: 0 10px 0 10px;
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
              width: 440px;
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
            .cardTitle {
              font-size: 18px;
              font-weight: 600;
            }
            .projectLink {
              cursor: pointer;
            }
            .cardBtn {
              width: 64px;
              height: 28px;
              border: 1px solid lightgray;
              border-radius: 5px;
              background-color: #fff;
              margin: 3px;
              color: #333;
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
      height: 85%;
      padding: 0;
      background-color: #fff;
      z-index: 100;
      padding-top: 12%;
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    padding-top: 30px;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectWrap {
      padding: 0 10px 0 10px;
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
              width: 300px;
              height: 180px;
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
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .cardTitle {
              font-size: 14px;
              font-weight: 600;
              margin: 0;
            }
            .projectLink {
              font-size: 12px;
              cursor: pointer;
              margin: 0;
            }
            .cardBtn {
              width: 54px;
              height: 24px;
              border: 1px solid lightgray;
              background-color: #fff;
              font-size: 11px;
              color: #333;
              cursor: pointer;
              &:nth-child(1) {
                border-right: 0;
              }
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
      height: 85%;
      padding: 0;
      background-color: #fff;
      z-index: 100;
      padding-top: 12%;
    }
  }
`;
