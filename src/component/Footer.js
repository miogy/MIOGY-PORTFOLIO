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
            이력서 한눈에 보기
          </Link>
        </dd>
      </dl>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;
