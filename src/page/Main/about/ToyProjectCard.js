import { useState } from "react";
import ToyPrjDetail from "./ToyProjectDetail";
import { FaDesktop } from "react-icons/fa";

import styled from "styled-components";

function ToyProjectCard({ projectData }) {
  const [introduce, setIntroduce] = useState(0);
  const [toyPrjModal, setToyPrjModal] = useState(false);

  return (
    <StyledToyCard>
      {projectData.map((prjCard) => {
        return (
          <div key={prjCard.id} className="ToyPrjContainer">
            <dl className="cardContainer">
              <dt className="toyPrjImg">
                <img
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIntroduce(prjCard.id);
                    setToyPrjModal(true);
                  }}
                  src={prjCard.imgSrc}
                  alt="toyprojectImg"
                />
              </dt>
              <dd className="toyCardContents">
                <p className="toyPrjTop">
                  <span className="title">{prjCard.projectTitle}</span>
                </p>
                <p className="prjAbout">
                  <strong>{prjCard.about}</strong>
                  <span className="introduce">{prjCard.introduce}</span>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setIntroduce(prjCard.id);
                      setToyPrjModal(true);
                    }}
                  >
                    더보기
                  </button>
                </p>
                <p className="toyPrjContents">
                  <span
                    className="toyPrjBtn"
                    onClick={() => {
                      window.location.href = `${prjCard.readme}`;
                    }}
                  >
                    Readme
                  </span>
                  <span
                    className="toyPrjBtn"
                    onClick={() => {
                      window.location.href = `${prjCard.blog}`;
                    }}
                  >
                    Blog
                  </span>
                </p>
              </dd>

              <dd
                className="toyPrjLink"
                onClick={() => {
                  window.location.href = `${prjCard.site}`;
                }}
              >
                <FaDesktop className="icon" />
                프로젝트 체험하기
              </dd>
            </dl>
          </div>
        );
      })}
      {toyPrjModal === true ? (
        <div className="projectIntroduce">
          <ToyPrjDetail
            project={projectData}
            setToyPrjModal={setToyPrjModal}
            introduce={introduce}
          />
        </div>
      ) : null}
    </StyledToyCard>
  );
}
export default ToyProjectCard;

const StyledToyCard = styled.div`
  @media screen and (min-width: 980px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .ToyPrjContainer {
      position: relative;
      width: 280px;
      margin-right: 30px;
      /* border: 1px solid lightgray; */
      .cardContainer {
        padding: 10px;
        margin: 0 auto;
        .toyPrjImg {
          img {
            width: 100%;
          }
        }
        .toyCardContents {
          width: 100%;
          margin: 0 auto;

          .toyPrjTop {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid lightgray;
            .title {
              font-size: 18px;
              font-weight: 600;
              color: #333;
            }
            button {
              border: 0;
              background-color: rgba(0, 0, 0, 0);
            }
          }
          .prjAbout {
            width: 80%;
            height: 110px;
            margin: 0 auto;
            font-size: 14px;
            color: #333;
            overflow: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
            strong {
              width: 100%;
              display: block;
              margin-bottom: 6px;
            }
            .introduce {
              line-height: 22px;
            }
            button {
              font-size: 12px;
              margin-left: 6px;
              border: 1px solid lightgray;
              background-color: #fff;
              &:hover {
                background-color: lightgray;
                color: #fff;
              }
            }
          }
          .toyPrjContents {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .toyPrjBtn {
              width: 60px;
              padding: 5px;
              font-size: 12px;
              border: 1px solid lightgray;
              border-radius: 5px;
              &:hover {
                background-color: #000;
                border-color: #000;
                color: #fff;
              }
            }
          }
        }
        .toyPrjLink {
          width: 100%;
          margin: 0 auto;
          font-size: 14px;
          margin-bottom: 10px;
          .icon {
            margin-right: 6px;
          }
        }
      }
    }
    .projectIntroduce {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 100;
    }
  }
  @media screen and (max-width: 979px) and (min-width: 580px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .ToyPrjContainer {
      position: relative;
      width: 280px;
      margin-right: 30px;
      /* border: 1px solid lightgray; */
      .cardContainer {
        padding: 10px;
        margin: 0 auto;
        .toyPrjImg {
          img {
            width: 100%;
          }
        }
        .toyCardContents {
          width: 100%;
          margin: 0 auto;

          .toyPrjTop {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid lightgray;
            .title {
              font-size: 18px;
              font-weight: 600;
              color: #333;
            }
            button {
              border: 0;
              background-color: rgba(0, 0, 0, 0);
            }
          }
          .prjAbout {
            width: 80%;
            height: 0px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 16px;
            color: #333;
            overflow: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
            strong {
              width: 100%;
              display: block;
              margin-bottom: 6px;
            }
            .introduce {
              line-height: 22px;
            }
            button {
              font-size: 12px;
              margin-left: 6px;
              border: 1px solid lightgray;
              background-color: #fff;
              &:hover {
                background-color: lightgray;
                color: #fff;
              }
            }
          }
          .toyPrjContents {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .toyPrjBtn {
              width: 50px;
              margin: 0 5px 0 5px;
              padding: 5px;
              font-size: 12px;
              border: 1px solid lightgray;
              border-radius: 5px;
              &:hover {
                background-color: #000;
                border-color: #000;
                color: #fff;
              }
            }
          }
        }
        .toyPrjLink {
          width: 100%;
          margin: 0 auto;
          font-size: 14px;
          margin-bottom: 10px;
          .icon {
            margin-right: 6px;
          }
        }
      }
    }
    .projectIntroduce {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 100;
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    cursor: pointer;
    ::-webkit-scrollbar {
      display: none;
    }
    .ToyPrjContainer {
      position: relative;
      width: 280px;
      margin-right: 30px;
      /* border: 1px solid lightgray; */
      .cardContainer {
        padding: 10px;
        margin: 0 auto;
        .toyPrjImg {
          img {
            width: 100%;
          }
        }
        .toyCardContents {
          width: 100%;
          margin: 0 auto;

          .toyPrjTop {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px solid lightgray;
            .title {
              font-size: 18px;
              font-weight: 600;
              color: #333;
            }
            button {
              border: 0;
              background-color: rgba(0, 0, 0, 0);
            }
          }
          .prjAbout {
            width: 80%;
            height: 0px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 16px;
            color: #333;
            overflow: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
            strong {
              width: 100%;
              display: block;
              margin-bottom: 6px;
            }
            .introduce {
              line-height: 22px;
            }
            button {
              font-size: 12px;
              margin-left: 6px;
              border: 1px solid lightgray;
              background-color: #fff;
              &:hover {
                background-color: lightgray;
                color: #fff;
              }
            }
          }
          .toyPrjContents {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .toyPrjBtn {
              width: 50px;
              margin: 0 5px 0 5px;
              padding: 5px;
              font-size: 12px;
              border: 1px solid lightgray;
              border-radius: 5px;
              &:hover {
                background-color: #000;
                border-color: #000;
                color: #fff;
              }
            }
          }
        }
        .toyPrjLink {
          width: 100%;
          margin: 0 auto;
          font-size: 14px;
          margin-bottom: 10px;
          .icon {
            margin-right: 6px;
          }
        }
      }
    }
    .projectIntroduce {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 100;
    }
  }
`;
