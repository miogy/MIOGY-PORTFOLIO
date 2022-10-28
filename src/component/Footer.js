import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <dl className="footerContainer">
        <dt>Develop</dt>
        <dd>
          <Link to="https://github.com/miogy" className="styleNone">
            Git
          </Link>
          <Link to="https://github.com/miogy" className="styleNone">
            Velog
          </Link>
        </dd>
      </dl>
      <dl className="footerContainer">
        <dt>SNS</dt>
        <dd>
          <Link to="https://www.instagram.com/mi_ogy/" className="styleNone">
            instagram
          </Link>
          <Link to="https://blog.naver.com/jjangrl87" className="styleNone">
            blog
          </Link>
        </dd>
      </dl>
      <dl className="footerContainer">
        <dt></dt>
        <dd
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Link to="/info" className="styleNone">
            이력서
          </Link>
        </dd>
      </dl>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.div`
  @media screen and (min-width: 981px) {
    width: 100%;
    height: 86px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 9999;
    .footerContainer {
      width: 30%;
      font-size: 1.2em;
      dt {
        margin-bottom: 6px;
      }
      dd {
        font-size: 0.8em;
        margin: 0;
        .styleNone {
          text-decoration: none;
          list-style: none;
          color: #999;
          margin: 0 5px 0 5px;
          cursor: pointer;
          &:hover {
            color: #222;
            font-weight: 600;
          }
        }
      }
    }
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: lightgray;
    z-index: 9999;
    .footerContainer {
      width: 30%;
      margin: 5%;
      font-size: 1.2em;
      dt {
        display: none;
        margin-bottom: 6px;
      }
      dd {
        height: 30px;
        font-size: 0.8em;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: lightgray;
    z-index: 9999;
    .footerContainer {
      width: 30%;
      margin: 5%;
      font-size: 1.2em;
      dt {
        display: none;
        margin-bottom: 6px;
      }
      dd {
        height: 30px;
        font-size: 0.8em;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
  }
`;
