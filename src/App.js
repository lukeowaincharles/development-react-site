import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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
import CookieConsentBanner from "./components/Portfolio/Utilities/CookieConsentBanner/CookieConsentBanner";
import { AnimatePresence } from "framer-motion";
import DarkModeSwitch from "./components/Portfolio/Utilities/DarkModeSwitch/DarkModeSwitch";

function App() {
  const width = useWindowWidth(),
    location = useLocation();

  useEffect(() => {
    if (width <= 768) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, width]);

  return (
    <div className="App">
      <Header />
      <DarkModeSwitch />
      <AnimatePresence exitBeforeEnter intial={false}>
        <Switch location={location} key={location.pathname}>
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
              <BrowserWindow
                hasDrag={false}
                classes="browser-window--archive"
                tab="Archived web site"
                closeWindow={true}
              >
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
          <Route
            exact
            path="/:id"
            component={ProjectDetails}
            location={location}
          />
        </Switch>
      </AnimatePresence>
      <CookieConsentBanner />
    </div>
  );
}

export default App;
