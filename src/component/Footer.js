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
        <dt>이력서</dt>
        <dd
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Link to="/info" className="styleNone flipbook">
            E-Book
          </Link>
          <span
            className="pdfLink styleNone"
            onClick={() => {
              window.location.href =
                "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:adffedc3-1ec3-331e-82f9-018fe1ae2a7e";
            }}
          >
            PDF
          </span>
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
  @media screen and (max-width: 680px) and (min-width: 230px) {
    width: 100%;
    height: 50px;
    dt {
      display: none;
    }
    dd {
      .hide {
        display: none;
      }
      .flipbook {
        display: none;
      }
      .pdfLink {
        color: #666;
      }
    }
  }
`;
