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
                          <p>{data.realizeText.fist}</p>
                          <p>{data.realizeText.second}</p>
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
  width: 100%;
  .toyPrjWrap {
    position: relative;
    width: 1100px;
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
`;
