// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { BsBook } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <FooterWrap>
      <ul className="footerContainer">
        <li className="list">
          <span
            className="styleNone"
            onClick={() => {
              window.location.href = "https://github.com/miogy";
            }}
          >
            <img
              className="footerLogo"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="git"
            />
          </span>

          <span
            className="styleNone"
            onClick={() => {
              window.location.href = "https://velog.io/@miogy";
            }}
          >
            <img
              className="footerLogo"
              src="https://simpleicons.org/icons/velog.svg"
              alt="velog"
            />
          </span>
          {/* <Link to="/info" className="styleNone footerIcon">
            <BsBook
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Link> */}
          <span
            className="pdfLink styleNone footerIcon"
            onClick={() => {
              window.location.href =
                "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:adffedc3-1ec3-331e-82f9-018fe1ae2a7e";
            }}
          >
            <GrDocumentPdf />
          </span>
        </li>
        <li className="copyright">
          <AiOutlineCopyrightCircle /> 2022. Yang Mi Og. All rights reserved.
        </li>
      </ul>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 9999;
  .footerContainer {
    padding: 0;
    .list {
      font-size: 0.8em;
      margin-bottom: 8px;
      text-decoration: none;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      .footerLogo {
        width: 40px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: inset 0 0 20px lightgray, 1px 1px 8px rgba(0, 0, 0, 0.3);
      }
      .footerIcon {
        padding: 9px 9px 2px 8px;
        font-size: 25px;
        border-radius: 50%;
        box-shadow: inset 0 0 3px lightgray, 1px 1px 8px rgba(0, 0, 0, 0.3);
      }
      .styleNone {
        text-decoration: none;
        list-style: none;
        color: #666;
        margin: 0 5px 0 5px;
        cursor: pointer;
        &:hover {
          color: #222;
          font-weight: 600;
        }
      }
    }
    .copyright {
      font-size: 11px;
      text-decoration: none;
      list-style: none;
    }
  }
  @media screen and (max-width: 680px) and (min-width: 230px) {
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 9999;
    .footerContainer {
      .list {
        font-size: 0.8em;
        margin-bottom: 8px;
        text-decoration: none;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        .footerLogo {
          width: 40px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: inset 0 0 20px lightgray, 1px 1px 8px rgba(0, 0, 0, 0.3);
        }
        .footerIcon {
          padding: 9px 9px 2px 8px;
          font-size: 25px;
          border-radius: 50%;
          box-shadow: inset 0 0 3px lightgray, 1px 1px 8px rgba(0, 0, 0, 0.3);
        }
        .styleNone {
          text-decoration: none;
          list-style: none;
          color: #666;
          margin: 0 5px 0 5px;
          cursor: pointer;
          &:hover {
            color: #222;
            font-weight: 600;
          }
        }
      }
      .copyright {
        font-size: 11px;
        text-decoration: none;
        list-style: none;
        white-space: nowrap;
      }
    }
  }
`;
