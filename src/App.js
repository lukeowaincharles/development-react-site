import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/Portfolio/Projects/Project-details";
import "./App.scss";
import PageLoader from "./components/Archive/PageLoader";
import Nav from "./components/Archive/Nav";
import Hero from "./components/Archive/Hero";
import About from "./components/Archive/About";
import Experience from "./components/Archive/Experience";
import Contact from "./components/Archive/Contact";
import Projects from "./components/Archive/Projects";
import Header from "./components/Portfolio/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import BrowserWindow from "./components/Portfolio/Browser/BrowserWindow";
import PortfolioProjects from "./components/Portfolio/Projects/PortfolioProjects";
import AboutMe from "./components/Portfolio/About/AboutMe";
import AppFolder from "./components/Portfolio/AppFolder/AppFolder";

function App() {
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
                      <PortfolioProjects />
                      <AboutMe />
                    </Col>
                    <Col md={6} lg={2}>
                      <AppFolder />
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          />
          <Route
            exact
            path="/archive"
            render={() => (
              <BrowserWindow classes="browser-window--archive">
                <div className="archived">
                  <PageLoader />
                  <main>
                    <Nav />
                    <Hero />
                    <Projects />
                    <footer className="section-margin">
                      <About />
                      <Experience />
                      <Contact />
                    </footer>
                  </main>
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
