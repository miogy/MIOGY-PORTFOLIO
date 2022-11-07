import styled from "styled-components";

function ToyProjectDetail({ project, setToyPrjModal, introduce }) {
  return (
    <StyledToyPrj>
      <div className="toyPrjWrap">
        <button onClick={() => setToyPrjModal(false)}>CLOSE</button>
        {project.map((projectList) => {
          if (projectList.id !== introduce) return null;
          return (
            <div key={projectList.id} className="listWrap">
              <h4>
                {projectList.projectContent.title}
                <p className="projectBtn">
                  <span
                    onClick={() => {
                      window.location.href = `${projectList.readme}`;
                    }}
                  >
                    README
                  </span>
                  <span
                    onClick={() => {
                      window.location.href = `${projectList.blog}`;
                    }}
                  >
                    Project BLOG
                  </span>
                </p>
              </h4>
              <div className="introduceWrap">
                <h5>프로젝트 소개</h5>
                <p>{projectList.projectContent.firstAbout}</p>
                <p>개발 기간 : {projectList.projectContent.date}</p>
                <p>{projectList.projectContent.stack}</p>
                <p> 언어 : {projectList.projectContent.lang}</p>
                <p> Style : {projectList.projectContent.style}</p>
                <p> Library : {projectList.projectContent.library}</p>
                <p>
                  Verrsion control Tool :{" "}
                  {projectList.projectContent.VersionControlTool}
                </p>
              </div>
              <div className="realizeContents">
                {projectList.projectContent.roleContent.map((data) => {
                  return (
                    <div key={data.id} className="contentsWrap">
                      <ul>
                        <li className="contentsTitle">{data.realizeTitle}</li>
                        <li>
                          <img src={data.realizeUrl} alt="projectPic" />
                        </li>
                        <li>
                          <p>{data.realizeText}</p>
                        </li>
                        <li className="contentsTitle">
                          {data.realizeCodeTitle}
                        </li>
                        <li>
                          <img src={data.realizeCodeSrc} alt="codeImg" />
                        </li>
                        <li>
                          <p>{data.realizeExplain.fist}</p>
                          <p>{data.realizeExplain.second}</p>
                          <p>{data.realizeExplain.third}</p>
                        </li>
                        <li className="final">
                          <p className="gifTitle">
                            {" "}
                            {data.realizeExplain.fourth}{" "}
                          </p>
                          <img src={data.realizeExplain.gif} alt="gif" />
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </StyledToyPrj>
  );
}
export default ToyProjectDetail;

const StyledToyPrj = styled.div`
  @media screen and (min-width: 1100px) {
    width: 100%;
    .toyPrjWrap {
      position: relative;
      width: 980px;
      height: 100vh;
      margin: 0 auto;
      overflow: scroll;
      z-index: 9900;
      ::-webkit-scrollbar {
        display: none;
      }
      button {
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
          color: #be0a26;
          cursor: pointer;
          font-weight: 600;
        }
      }
      .listWrap {
        /* width: 980px; */
        padding-top: 70px;
        h4 {
          font-size: 32px;
          color: #333;
          display: flex;
          align-items: center;
          .projectBtn {
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
              font-size: 12px;
              margin-left: 20px;
              padding: 5px;
              border: 1px solid lightgray;
              border-radius: 5px;
              color: lightgray;
              cursor: pointer;
              &:hover {
                background-color: #000;
                color: #fff;
                border-color: #000;
              }
            }
          }
        }
        .introduceWrap {
          width: 90%;
          margin: 0 auto;
          line-height: 26px;
          margin-bottom: 10px;
          text-align: start;
          border-bottom: 1px solid lightgray;
          h5 {
            font-size: 18px;
          }
        }
        .realizeContents {
          margin: 0 auto;
          text-align: start;
          border-bottom: 1px solid lightgray;
          .contentsWrap {
            width: 90%;
            margin: 0 auto;
            padding-top: 30px;
            ul {
              width: 860px;
              li {
                font-size: 15px;
                list-style: none;
                text-decoration: none;
                line-height: 26px;
                color: #666;
                img {
                  width: 100%;
                }
              }
              .contentsTitle {
                font-size: 18px;
                color: #000;
                font-weight: 600;
                line-height: 60px;
              }
              .gifTitle {
                padding: 30px;
                font-size: 16px;
                color: #000;
                font-weight: bold;
              }
              .final {
                width: 600px;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1099px) and (min-width: 980px) {
    width: 100%;
    .toyPrjWrap {
      position: relative;
      width: 800px;
      height: 100vh;
      margin: 0 auto;
      overflow: scroll;
      z-index: 9900;
      ::-webkit-scrollbar {
        display: none;
      }
      button {
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
          color: #be0a26;
          cursor: pointer;
          font-weight: 600;
        }
      }
      .listWrap {
        /* width: 980px; */
        padding-top: 70px;
        h4 {
          font-size: 32px;
          color: #333;
          display: flex;
          align-items: center;
          .projectBtn {
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
              font-size: 12px;
              margin-left: 20px;
              padding: 5px;
              border: 1px solid lightgray;
              border-radius: 5px;
              color: lightgray;
              cursor: pointer;
              &:hover {
                background-color: #000;
                color: #fff;
                border-color: #000;
              }
            }
          }
        }
        .introduceWrap {
          width: 90%;
          margin: 0 auto;
          line-height: 26px;
          margin-bottom: 10px;
          text-align: start;
          border-bottom: 1px solid lightgray;
          h5 {
            font-size: 18px;
          }
        }
        .realizeContents {
          margin: 0 auto;
          text-align: start;
          border-bottom: 1px solid lightgray;
          .contentsWrap {
            width: 90%;
            margin: 0 auto;
            padding-top: 20px;
            ul {
              width: 700px;
              margin: 0 auto;
              li {
                width: 90%;
                font-size: 15px;
                list-style: none;
                text-decoration: none;
                line-height: 22px;
                color: #666;
                img {
                  width: 100%;
                }
              }
              .contentsTitle {
                font-size: 18px;
                color: #000;
                font-weight: 600;
                line-height: 60px;
              }
              .gifTitle {
                padding: 30px;
                font-size: 16px;
                color: #000;
                font-weight: bold;
              }
              .final {
                width: 600px;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 979px) and (min-width: 580px) {
    width: 100%;
    .toyPrjWrap {
      position: relative;
      width: 570px;
      height: 100vh;
      margin: 0 auto;
      overflow: scroll;
      z-index: 9900;
      ::-webkit-scrollbar {
        display: none;
      }
      button {
        position: fixed;
        top: 70px;
        right: 0;
        width: 70px;
        height: 32px;
        margin-right: 30px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          color: #be0a26;
          cursor: pointer;
          font-weight: 600;
        }
      }
      .listWrap {
        /* width: 980px; */
        padding-top: 60px;
        h4 {
          font-size: 32px;
          color: #333;
          display: flex;
          align-items: center;
          .projectBtn {
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
              font-size: 12px;
              margin-left: 20px;
              padding: 5px;
              border: 1px solid lightgray;
              border-radius: 5px;
              color: lightgray;
              cursor: pointer;
              &:hover {
                background-color: #000;
                color: #fff;
                border-color: #000;
              }
            }
          }
        }
        .introduceWrap {
          width: 90%;
          margin: 0 auto;
          line-height: 22px;
          text-align: start;
          padding-bottom: 10px;
          h5 {
            font-size: 18px;
          }
          p {
            margin: 3px 0 3px 0;
          }
        }
        .realizeContents {
          margin: 0 auto;
          text-align: start;
          border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;
          .contentsWrap {
            width: 100%;
            margin: 0 auto;
            padding-top: 20px;
            ul {
              width: 560px;
              margin: 0 auto;
              li {
                width: 90%;
                margin: 0;
                font-size: 15px;
                list-style: none;
                text-decoration: none;
                line-height: 22px;
                color: #666;
                img {
                  width: 480px;
                }
              }
              .contentsTitle {
                font-size: 18px;
                color: #000;
                font-weight: 600;
                line-height: 60px;
              }
              .gifTitle {
                padding: 30px;
                font-size: 16px;
                color: #000;
                font-weight: bold;
              }
              .final {
                width: 600px;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    .toyPrjWrap {
      position: relative;
      width: 90%;
      height: 100vh;
      margin: 0 auto;
      overflow: scroll;
      z-index: 9900;
      ::-webkit-scrollbar {
        display: none;
      }
      .projectBtn {
        width: 100%;
        display: block;
      }
      button {
        position: fixed;
        top: 70px;
        right: 0;
        width: 70px;
        height: 32px;
        margin-right: 30px;
        margin-bottom: 80px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #333;
        z-index: 9999;
        &:hover {
          color: #be0a26;
          cursor: pointer;
          font-weight: 600;
        }
      }
      .listWrap {
        /* width: 980px; */
        padding-top: 60px;
        h4 {
          margin: 0;
          font-size: 28px;
          color: #333;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .projectBtn {
            display: flex;
            align-items: center;
            margin: 10px;
            span {
              font-size: 12px;
              margin-left: 20px;
              padding: 5px;
              border: 1px solid lightgray;
              border-radius: 5px;
              color: lightgray;
              cursor: pointer;
              &:hover {
                background-color: #000;
                color: #fff;
                border-color: #000;
              }
            }
          }
        }
        .introduceWrap {
          width: 90%;
          margin: 0 auto;
          line-height: 22px;
          text-align: start;
          padding-bottom: 10px;
          h5 {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            margin: 3px 0 3px 0;
          }
        }
        .realizeContents {
          margin: 0 auto;
          text-align: start;
          border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;
          .contentsWrap {
            width: 100%;
            margin: 0 auto;
            padding-top: 20px;
            ul {
              padding: 0;
              li {
                width: 90%;
                margin: 0;
                padding: 0 10px 0 10px;
                font-size: 14px;
                list-style: none;
                text-decoration: none;
                line-height: 20px;
                color: #666;
                img {
                  width: 100%;
                }
              }
              .contentsTitle {
                font-size: 16px;
                color: #000;
                font-weight: 600;
                line-height: 30px;
              }
              .gifTitle {
                padding: 30px;
                font-size: 16px;
                color: #000;
                font-weight: bold;
              }
              .final {
                width: 100%;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
`;
