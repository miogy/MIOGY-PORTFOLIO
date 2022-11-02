import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <dl className="footerContainer">
        <dt>Develop</dt>
        <dd>
          <span
            className="styleNone"
            onClick={() => {
              window.location.href = "https://github.com/miogy";
            }}
          >
            Git
          </span>

          <span
            className="styleNone"
            onClick={() => {
              window.location.href = "https://velog.io/@miogy";
            }}
          >
            Velog
          </span>
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
            이력서 <span className="hide">한눈에 보기</span>
          </Link>
        </dd>
      </dl>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.div`
  width: 100%;
  height: 80px;
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
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    height: 50px;
    dt {
      display: none;
    }
    dd {
      .hide {
        display: none;
      }
    }
  }
`;
