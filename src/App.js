import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import ProjectDetails from "./components/Portfolio/Projects/ProjectDetails";
import "./App.scss";
import Header from "./components/Portfolio/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioProjects from "./components/Portfolio/Projects/PortfolioProjects";
import AboutMe from "./components/Portfolio/About/AboutMe";
import AppFolder from "./components/Portfolio/AppFolder/AppFolder";
import Taskbar from "./components/Portfolio/Taskbar/Taskbar";
import useWindowWidth from "./components/Portfolio/Utilities/WindowWidth";
import CookieConsentBanner from "./components/Portfolio/Utilities/CookieConsentBanner/CookieConsentBanner";
import { AnimatePresence } from "framer-motion";
// import DarkModeSwitch from "./components/Portfolio/Utilities/DarkModeSwitch/DarkModeSwitch";

function App() {
  const width = useWindowWidth(),
    location = useLocation(),
    [mode, setMode] = useState("dark");

  useEffect(() => {
    if (width <= 768) {
      window.scrollTo(0, 0);
    }

    // Add a listener to update the styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    // On load set the mode
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove the listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, [location.pathname, width]);

  const onSelectMode = (mode) => {
    setMode(mode);
    const browserWindow = Array.from(
      document.getElementsByClassName("browser-window")
    );
    if (mode === "light") {
      document.body.classList.add("light");
      browserWindow.forEach((item) => {
        item.classList.remove("dark");
        item.classList.add("light");
      });
    } else {
      document.body.classList.remove("light");
      browserWindow.forEach((item) => {
        item.classList.remove("light");
        item.classList.add("dark");
      });
    }
  };

  return (
    <div className="App">
      <Header />
      {/* <DarkModeSwitch onSelectMode={onSelectMode} mode={mode} /> */}
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
                        <PortfolioProjects mode={mode} />
                        <AboutMe mode={mode} />
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
            path="/:id"
            // component={ProjectDetails}
            location={location}
            mode={mode}
            render={() => <ProjectDetails mode={mode} />}
          />
        </Switch>
      </AnimatePresence>
      <CookieConsentBanner />
    </div>
  );
}

export default App;
