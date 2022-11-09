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
                <p>담당 : </p>
                <p>{list.thirdAbout.team.projectFirst}</p>
                <p>{list.thirdAbout.team.projectSecond}</p>
                <p>{list.thirdAbout.team.projectThird}</p>
                <p> {list.thirdAbout.team.projectFourth}</p>
              </li>
              <li>
                <h5> {list.thirdAbout.treeTitle}</h5>
                <ul>
                  {list.thirdAbout.treeContent.map((tree) => {
                    return (
                      <li key={tree.id}>
                        <p>
                          <img src={tree.src} alt="프로젝트구조" />
                        </p>
                        <p>{tree.about}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <div className="roleContentWrap">
                  {list.thirdAbout.roleContent.map((item) => {
                    return (
                      <ul className="projectBox" key={item.id}>
                        <li>
                          <h5>{item.role}</h5>
                          {item.work}
                        </li>
                        {/* <li>
                         <video
                            controls
                            src={item.url}
                            type="video/mp4"
                          ></video> 
                        </li>*/}
                        <li>
                          <img src={item.codeSrc} alt="projectImg" />
                        </li>
                        <li>
                          <p>{item.explain.first}</p>
                          <p>{item.explain.second}</p>
                          <p>{item.explain.third}</p>
                          <p>{item.explain.fourth}</p>
                        </li>
                        <li>
                          <img className="gif" src={item.gif} alt="시현영상" />
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
          p {
            margin: 0;
          }
          ul {
            li {
              p {
                img {
                  width: 800px;
                  margin: 10px 0 20px 0;
                }
              }
            }
          }
          .roleContentWrap {
            padding-top: 40px;
            .projectBox {
              padding: 0 0 20px 0;
              border-bottom: 1px solid lightgray;
              li {
                width: 800px;
                margin: 0 auto;
                text-decoration: none;
                list-style: none;
                line-height: 26px;
                padding-top: 20px;
                padding-bottom: 20px;
                h5 {
                  margin: 0;
                }
                p {
                  width: 90%;
                  margin: 0 auto;
                }
                .gif {
                  display: block;
                  margin: 0 auto;
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
  @media screen and (max-width: 1329px) and (min-width: 920px) {
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
          p {
            margin: 0;
          }
          ul {
            width: 100%;
            text-align: start;
            padding: 0;
            li {
              p {
                img {
                  width: 800px;
                  margin: 0 0 20px 0;
                }
              }
            }
          }
          .roleContentWrap {
            width: 100%;
            padding-top: 40px;
            .projectBox {
              padding: 0 0 20px 0;
              border-bottom: 1px solid lightgray;
              li {
                width: 100%;
                text-decoration: none;
                list-style: none;
                line-height: 24px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 16px;
                h5 {
                  margin: 0 0 10px 0;
                  font-size: 18px;
                }
                img {
                  width: 800px;
                }
                p {
                  width: 100%;
                }
                .gif {
                  width: 600px;
                  display: block;
                  margin: 0 auto;
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
    width: 95%;
    height: 82vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 760px;
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
          p {
            margin: 0;
          }
          ul {
            width: 100%;
            text-align: start;
            padding: 0;
            li {
              p {
                img {
                  width: 100%;
                  margin: 0 0 20px 0;
                }
              }
            }
          }
          .roleContentWrap {
            width: 100%;
            padding-top: 40px;
            .projectBox {
              padding: 0 0 20px 0;
              border-bottom: 1px solid lightgray;
              li {
                width: 100%;
                margin: 0 auto;
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 16px;
                h5 {
                  margin: 0 0 10px 0;
                  font-size: 18px;
                }
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                }
                .gif {
                  width: 600px;
                  display: block;
                  margin: 0 auto;
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
    width: 95%;
    height: 90vh;
    overflow: scroll;
    margin: 0 auto;
    color: #333;
    text-align: start;
    ::-webkit-scrollbar {
      display: none;
    }
    .projectListContainer {
      width: 560px;
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
          p {
            margin: 0;
          }
          ul {
            width: 100%;
            text-align: start;
            padding: 0;
            li {
              p {
                img {
                  width: 100%;
                  margin: 0 0 20px 0;
                }
              }
            }
          }
          .roleContentWrap {
            width: 100%;
            padding-top: 26px;
            .projectBox {
              padding: 0 0 10px 0;
              border-bottom: 1px solid lightgray;
              li {
                width: 100%;
                margin: 0 auto;
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 14px;
                h5 {
                  margin: 0;
                }
                img {
                  width: 100%;
                }
                p {
                  width: 100%;
                  margin: 0 auto;
                }
                .gif {
                  display: block;
                  margin: 0 auto;
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
      width: 95%;
      margin: 0 auto;
      h4 {
        font-size: 28px;
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
          p {
            margin: 0;
          }
          ul {
            width: 100%;
            padding: 0;
            li {
              p {
                img {
                  width: 100%;
                  margin: 0 auto;
                }
              }
            }
          }
          .roleContentWrap {
            width: 100%;
            margin: 0 auto;
            padding-top: 20px;
            .projectBox {
              padding: 0 0 10px 0;
              border-bottom: 1px solid lightgray;
              li {
                width: 100%;
                margin: 0 auto;
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                h5 {
                  margin: 0;
                }
                p {
                  width: 100%;
                  margin: 0 auto;
                }
                img {
                  width: 100%;
                }
                .gif {
                  width: 100%;
                  display: block;
                  margin: 0 auto;
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
      width: 95%;
      margin: 0 auto;
      h4 {
        font-size: 28px;
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
          width: 100%;
          text-decoration: none;
          list-style: none;
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 20px;
          h5 {
            font-size: 16px;
          }
          p {
            margin: 0;
          }
          ul {
            width: 100%;
            padding: 0;
            li {
              p {
                img {
                  width: 100%;
                  margin: 0 auto;
                }
              }
            }
          }
          .roleContentWrap {
            width: 100%;
            margin: 0 auto;
            padding-top: 20px;
            .projectBox {
              padding: 0 0 10px 0;
              border-bottom: 1px solid lightgray;
              li {
                text-decoration: none;
                list-style: none;
                line-height: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                h5 {
                  margin: 0;
                }
                p {
                  width: 100%;
                  margin: 0 auto;
                }
                img {
                  width: 100%;
                }
                .gif {
                  width: 100%;
                  display: block;
                  margin: 0 auto;
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
