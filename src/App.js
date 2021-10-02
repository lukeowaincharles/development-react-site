import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/Portfolio/Projects/ProjectDetails";
import "./App.scss";
import PageLoader from "./components/Archive/PageLoader";
import Header from "./components/Portfolio/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import BrowserWindow from "./components/Portfolio/Browser/BrowserWindow";
import PortfolioProjects from "./components/Portfolio/Projects/PortfolioProjects";
import AboutMe from "./components/Portfolio/About/AboutMe";
import AppFolder from "./components/Portfolio/AppFolder/AppFolder";
import Taskbar from "./components/Portfolio/Taskbar/Taskbar";
import useWindowWidth from "./components/Portfolio/Utilities/WindowWidth";
import ArchiveSiteDesktop from "./assets/images/archive-site--desktop.png";
import ArchiveSiteMobile from "./assets/images/archive-site--mobile.png";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="portfolio">
                <Container>
                  <Row>
                    <Col md={6} lg={10}>
                      <section className="portfolio__content">
                        <PortfolioProjects />
                        <AboutMe />
                      </section>
                    </Col>
                    <Col md={6} lg={2} className="portfolio__column">
                      <AppFolder />
                    </Col>
                  </Row>
                  <Taskbar />
                </Container>
              </div>
            )}
          />
          <Route
            exact
            path="/archive"
            render={() => (
              <BrowserWindow hasDrag={false} classes="browser-window--archive">
                <div className="archived">
                  <PageLoader />
                  {width >= 992 ? (
                    <img src={ArchiveSiteDesktop} alt="" />
                  ) : (
                    <img src={ArchiveSiteMobile} alt="" />
                  )}
                </div>
              </BrowserWindow>
            )}
          />
          <Route exact path="/:id" component={ProjectDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
