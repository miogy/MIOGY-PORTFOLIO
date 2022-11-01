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
        <Link
          to="/info"
          className="headerLink"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          About
        </Link>
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
        font-size: 36px;
        letter-spacing: -0.16em;
      }
      h1 {
        font: 3rem/60px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
    }
  }
  @media screen and (max-width: 579px) and (min-width: 300px) {
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
        font-size: 28px;
        letter-spacing: -0.16em;
      }
      h1 {
        font: 38px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
    }
  }
`;
