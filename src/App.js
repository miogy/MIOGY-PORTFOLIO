import Main from "./page/Main/Main";
import Headers from "./component/Headers";
import Footer from "./component/Footer";
import styled from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Magazine from "./page/Magazine";
import Info from "./page/AboutPage/Info";
import Developer from "./page/DeveloperPage/Developer";
import Design from "./page/DesignPage/Design";
import ProjectPage from "./page/ProjectPage/ProjectPage";

function App() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/data/toyproject.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data.toyproject);
      });
  }, []);
  return (
    <StyledApp>
      <HashRouter className="routerWrap">
        <Headers className="headerWrap" />
        <Routes className="componentWrap">
          <Route path="/" element={<Main project={projectData} />} />
          <Route path="/about" element={<Info project={projectData} />} />
          <Route
            path="/developer"
            element={<Developer project={projectData} />}
          />
          <Route path="/design" element={<Design />} />
          <Route path="/projectpage" element={<ProjectPage />} />
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
