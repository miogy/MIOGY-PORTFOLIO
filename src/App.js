import Main from "./page/Main/Main";
import Headers from "./component/Headers";
import Footer from "./component/Footer";
import Info from "./page/Info";
import styled from "styled-components";

import { HashRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./page/ProjectPage";

function App() {
  return (
    <StyledApp>
      <HashRouter className="routerWrap">
        <Headers className="headerWrap" />
        <Routes className="componentWrap">
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </HashRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;
