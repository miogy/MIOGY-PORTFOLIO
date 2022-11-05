import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <div className="headerContainer">
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
          className="headerLink"
          onClick={() => {
            window.location.href =
              "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:71d57b21-7fc9-3405-92b8-1522d2352ed8";
          }}
        >
          About Me
        </div>
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
    .headerContainer {
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
        h1 {
          margin: 0;
          font: 3rem/60px "Joan", serif;
          color: #fff;
          letter-spacing: -0.16em;
        }
      }
    }
    .headerTab {
      width: 10%;
      position: absolute;
      top: 60px;
      right: 5%;
      display: flex;
      justify-content: space-around;
      border: 1px solid red;
      font-size: 28px;
      .pdfLink {
      }
      .eBook {
        margin: 0;
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    .headerContainer {
      width: 80%;
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .headerLink {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 20px;
        letter-spacing: -0.16em;
        h1 {
          font: 32px "Joan", serif;
          color: #fff;
          letter-spacing: -0.16em;
        }
      }
    }
  }
`;
