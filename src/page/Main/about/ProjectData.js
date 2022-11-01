import styled from "styled-components";

function ProjectList({ project }) {
  return (
    <ProjectListWrap>
      <h4>
        {project.contentTitle}
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
                        <video controls src={item.url} type="video/mp4"></video>
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
    </ProjectListWrap>
  );
}

function ProjectData({ projectTab, setPrjModal, project }) {
  return (
    <ProjectDataWrap>
      <div>
        {/* {console.log(project[0])} */}
        {projectTab === 0 ? (
          <ProjectList project={project[0]} />
        ) : projectTab === 1 ? (
          <ProjectList project={project[1]} />
        ) : null}
      </div>
      <button className="closeBtn" onClick={() => setPrjModal(false)}>
        CLOSE
      </button>
    </ProjectDataWrap>
  );
}
export default ProjectData;

const ProjectDataWrap = styled.div`
  width: 60%;
  height: 60%;
  position: absolute;
  overflow: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    2px 0 0 5px rgb(255, 255, 255, 0.8), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  .closeBtn {
    width: 100px;
    height: 40px;
    float: right;
    margin-right: 50px;
    margin-bottom: 80px;
    border: 0;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 5px rgb(255, 255, 255, 0.3), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
`;

const ProjectListWrap = styled.div`
  /* position: relative; */
  padding: 0 10% 0 10%;
  color: #333;
  text-align: start;
  h4 {
    font-size: 18px;
    color: #be0a26;
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
  .dataContent {
    padding: 0;
    li {
      text-decoration: none;
      list-style: none;
      line-height: 26px;
      h5 {
        font-size: 16px;
      }
      span {
      }
      .roleContentWrap {
        padding-top: 60px;
        margin: 0 auto;
        .projectBox {
          padding: 0;
          li {
            text-decoration: none;
            list-style: none;
            line-height: 26px;
            margin-bottom: 20px;
            video {
              max-width: 580px;
              min-width: 300px;
              margin: 0 auto;
            }
          }
          .contentBoxWrap {
            display: flex;
            flex-wrap: wrap;
            .projectBoxContent {
              max-width: 500px;
              min-width: 300px;
              margin: 0 auto;
              /* padding: 0 3% 0 3%; */
            }
          }
          .projectBoxTitle {
            padding-top: 40px;
            strong {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;
