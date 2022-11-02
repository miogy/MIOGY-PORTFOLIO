import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <div>
        <Link
          to="/"
          className="headerLink"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h1>MIOGY</h1>
        </Link>
        <div
          className="pdfLink"
          onClick={() => {
            window.location.href =
              "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:adffedc3-1ec3-331e-82f9-018fe1ae2a7e";
          }}
        >
          PDF
        </div>
        {/* <Link
          to="/info"
          className="headerLink"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          About
        </Link> */}
      </div>
    </HeaderWrap>
  );
}
export default Header;

const HeaderWrap = styled.div`
  @media screen and (min-width: 580px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    div {
      width: 80%;
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headerLink {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 32px;
        letter-spacing: -0.16em;
      }
      h1 {
        font: 3rem/60px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
      .pdfLink {
        width: 10%;
        font-size: 30px;
        font-weight: 600;
        height: 50px;
        color: #fff;
        &:hover {
          color: #333;
        }
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 380px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    div {
      width: 80%;
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headerLink {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 26px;
        letter-spacing: -0.16em;
      }
      h1 {
        font: 40px/60px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
      .pdfLink {
        width: 10%;
        font-size: 26px;
        font-weight: 600;
        height: 50px;
        color: #fff;
        &:hover {
          color: #333;
        }
      }
    }
  }
  @media screen and (max-width: 379px) and (min-width: 230px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    div {
      width: 80%;
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headerLink {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 22px;
        letter-spacing: -0.16em;
      }
      h1 {
        font: 38px/60px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
      .pdfLink {
        width: 10%;
        font-size: 22px;
        font-weight: 500;
        height: 50px;
        color: #fff;
        &:hover {
          color: #333;
        }
      }
    }
  }
`;
