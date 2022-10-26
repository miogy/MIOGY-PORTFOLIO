import styled from "styled-components";

import { RiFileUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrap>
      <div>
        <Link to="/" className="headerLink">
          <h1>MIOGY</h1>
        </Link>
        <Link
          to="/info"
          className="headerLink"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <StyledRiFileUserLine size={40} />
        </Link>
      </div>
    </HeaderWrap>
  );
}
export default Header;

const HeaderWrap = styled.div`
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
      h1 {
        font: 46px/60px "Joan", serif;
        color: #fff;
        letter-spacing: -0.16em;
      }
    }
  }
`;

const StyledRiFileUserLine = styled(RiFileUserLine)`
  font-size: 32px;
  color: #fff;
  box-shadow: blueviolet;
`;
