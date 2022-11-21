import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <div className="headerContainer">
        {/* <img
          src="https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          alt="scrollNav"
        /> */}
        <Link
          to="/"
          className="headerLink"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h1>
            M<span>IOGY</span>
          </h1>
        </Link>
        <div className="menu">
          <Link to="/about" className="navMenu">
            About
          </Link>
          <Link to="/developer" className="navMenu">
            Developer
          </Link>
          <Link to="/design" className="navMenu">
            Design
          </Link>
          {/* <div
            className="navMenu"
            onClick={() => {
              window.location.href =
                "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:71d57b21-7fc9-3405-92b8-1522d2352ed8";
            }}
          >
            About Me
          </div> */}
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
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    z-index: 9999;
    .headerContainer {
      width: 100%;
      .headerLink {
        width: 100%;
        height: 100px;
        padding: 0;
        margin: 0 auto;
        text-decoration: none;
        list-style: none;
        color: #333;
        font-size: 32px;
        font-weight: 300;
        letter-spacing: -0.16em;
        h1 {
          width: 100%;
          height: 120px;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "나눔명조", serif;
          font-size: 4rem;
          color: #333;
          font-weight: lighter;
          letter-spacing: -0.21em;
          background-color: #fff;
        }
      }
      .menu {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .navMenu {
          margin: 0 60px;
          text-decoration: none;
          list-style: none;
          color: #333;
          font-weight: 600;
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
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        color: #333;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: -0.21em;
        h1 {
          margin-right: 30px;
          font-family: "나눔명조", serif;
          font-size: 32px;
          font-weight: lighter;
          color: #333;
          letter-spacing: -0.16em;
          span {
            display: none;
          }
        }
      }
      .menu {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .navMenu {
          text-decoration: none;
          list-style: none;
          color: #333;
          margin: 0 5%;
        }
      }
    }
  }
`;
