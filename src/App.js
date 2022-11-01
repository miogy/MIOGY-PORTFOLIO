import Main from "./page/Main/Main";
import Headers from "./component/Headers";
import Footer from "./component/Footer";
import Info from "./page/Info";
import styled from "styled-components";

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <HashRouter className="routerWrap">
        <Headers className="headerWrap" />
        <Routes className="componentWrap">
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </HashRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  @media screen and (min-width: 981px) {
    width: 100%;
    text-align: center;
    position: relative;
  }
  @media screen and (max-width: 980px) and (min-width: 581px) {
    width: 100%;
    text-align: center;
    position: relative;
  }
  @media screen and (max-width: 580px) and (min-width: 230px) {
    width: 100%;
    text-align: center;
    position: relative;
  }
`;
