import styled from "styled-components";

function ProjectList({ project, setPrjModal }) {
  return (
    <ProjectListWrap>
      <div className="projectListContainer">
        <h4>
          {project.contentTitle}
          <p className="projectBtn">
            <span
              onClick={() => {
                window.location.href = `${project.readme}`;
              }}
            >
              README
            </span>
            <span
              onClick={() => {
                window.location.href = `${project.blog}`;
              }}
            >
              Project BLOG
            </span>
          </p>
        </h4>
        {project?.data?.map((list) => {
          return (
            <ul key={list} className="dataContent">
              <li>
                <h5>{list.firstTitle}</h5>
              </li>
              <li>
                {list.team} : <span>{list.date}</span> {list.member}
              </li>
              <li> {list.firstAbout}</li>
              <li>
                <h5>{list.skill}</h5>
              </li>
              <li>
                <span>언어 :</span>
                {list.lang}
              </li>
              <li>
                <span>라이브러리 :</span>
                {list.library}
              </li>
              <li>
                <span>Community Tools :</span>
                {list.CommunityTools}
              </li>
              <li>
                <span>Version Control Tool :</span>
                {list.VersionControlTool}
              </li>

              <li>
                <h5>{list.thirdTitle}</h5>
              </li>
              <li>
                <span>구현사항 : </span>
                {list.thirdAbout.all}
              </li>
              <li>
                <span>담당 : </span>
                {list.thirdAbout.team}
              </li>
              <li>
                <div className="roleContentWrap">
                  {list.thirdAbout.roleContent.map((item) => {
                    return (
                      <ul className="projectBox">
                        <li className="projectBoxTitle">
                          <strong>{item.role}</strong>
                          {item.work}
                        </li>
                        <li className="contentBoxWrap">
                          <video
                            controls
                            src={item.url}
                            type="video/mp4"
                          ></video>
                          <p className="projectBoxContent">{item.text}</p>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </li>
            </ul>
          );
        })}
        <button className="closeBtn" onClick={() => setPrjModal(false)}>
          CLOSE
        </button>
      </div>
    </ProjectListWrap>
  );
}

function ProjectDetail({ projectTab, setPrjModal, project }) {
  return (
    <ProjectDataWrap>
      <div className="projectListContainer">
        {projectTab === 0 ? (
          <ProjectList project={project[0]} setPrjModal={setPrjModal} />
        ) : projectTab === 1 ? (
          <ProjectList project={project[1]} setPrjModal={setPrjModal} />
        ) : projectTab === 2 ? (
          <ProjectList project={project[2]} setPrjModal={setPrjModal} />
        ) : null}
      </div>
    </ProjectDataWrap>
  );
}
export default ProjectDetail;

const ProjectDataWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ProjectListWrap = styled.div`
  @media screen and (min-width: 1330px) {
    position: relative;
    width: 900px;
    height: 100vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 90%;
      margin: 0 auto;
      h4 {
        font-size: 32px;
        display: flex;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;

        li {
          text-decoration: none;
          list-style: none;
          line-height: 26px;
          margin-bottom: 20px;
          h5 {
            font-size: 20px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;
            .projectBox {
              padding: 0;
              li {
                text-decoration: none;
                list-style: none;
                line-height: 26px;
                padding-top: 20px;
                padding-bottom: 20px;
                video {
                  max-width: 580px;
                  min-width: 300px;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                width: 100%;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 40px;
                strong {
                  font-size: 18px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 70px;
        right: 10%;
        width: 80px;
        height: 36px;
        margin-right: 50px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 979px) and (min-width: 920px) {
    position: relative;
    width: 90%;
    height: 90vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 800px;
      margin: 0 auto;
      h4 {
        font-size: 28px;
        display: flex;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;
        li {
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;

            .projectBox {
              padding: 0;

              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 14px;
                video {
                  max-width: 500px;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 40px;
                font-size: 16px;
                strong {
                  font-size: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 70px;
        right: 6%;
        width: 60px;
        height: 30px;
        font-size: 12px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 919px) and (min-width: 780px) {
    position: relative;
    width: 90%;
    height: 82vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 700px;
      margin: 0 auto;
      h4 {
        font-size: 28px;
        color: #be0a26;
        display: flex;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;
        li {
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;

            .projectBox {
              padding: 0;

              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 14px;
                video {
                  max-width: 500px;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 40px;
                font-size: 16px;
                strong {
                  font-size: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 70px;
        right: 6%;
        width: 60px;
        height: 30px;
        font-size: 12px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 779px) and (min-width: 580px) {
    position: relative;
    width: 90%;
    height: 90vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 520px;
      margin: 0 auto;
      h4 {
        font-size: 28px;
        color: #be0a26;
        display: flex;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;
        li {
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;

            .projectBox {
              padding: 0;

              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 14px;
                video {
                  max-width: 500px;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 40px;
                font-size: 16px;
                strong {
                  font-size: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 70px;
        right: 6%;
        width: 60px;
        height: 30px;
        font-size: 12px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 380px) {
    position: relative;
    width: 90%;
    height: 75vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 100%;
      margin: 0 auto;
      h4 {
        font-size: 28px;
        color: #be0a26;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;
        li {
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;

            .projectBox {
              padding: 0;

              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                video {
                  max-width: 100%;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 20px;
                font-size: 16px;
                strong {
                  font-size: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 70px;
        right: 4%;
        width: 60px;
        height: 30px;
        font-size: 12px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 379px) and (min-width: 230px) {
    position: relative;
    width: 100%;
    height: 75vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 90%;
      margin: 0 auto;
      h4 {
        font-size: 28px;
        color: #be0a26;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .projectBtn {
          display: flex;
          align-items: center;
          span {
            font-size: 12px;
            margin-left: 10px;
            padding: 5px;
            border: 1px solid lightgray;
            border-radius: 5px;
            color: lightgray;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
        }
      }
      .dataContent {
        padding: 0;
        li {
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          .roleContentWrap {
            border-top: 1px solid lightgray;
            padding-top: 40px;

            .projectBox {
              padding: 0;

              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                video {
                  max-width: 100%;
                  margin: 0 auto;
                  margin-bottom: 16px;
                }
              }
              .contentBoxWrap {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                border-bottom: 1px solid lightgray;
                .projectBoxContent {
                  width: 80%;
                  margin: 0 auto;
                }
              }
              .projectBoxTitle {
                padding-top: 20px;
                font-size: 16px;
                strong {
                  font-size: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .closeBtn {
        position: fixed;
        top: 60px;
        right: 5%;
        width: 60px;
        height: 30px;
        font-size: 12px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
`;
