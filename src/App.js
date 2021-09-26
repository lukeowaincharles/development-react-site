import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/Portfolio/Project-details";
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
// import BrowserWindow from "./components/Portfolio/Browser/BrowserWindow";

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
                    <Col md={6} lg={10}></Col>
                    <Col md={6} lg={2}></Col>
                  </Row>
                </Container>
              </div>
            )}
          />
          <Route
            exact
            path="/archive"
            render={() => (
              <div className={`${"browser-window browser-window--archive dark"}`}>
                <div className="browser-window__bar">
                  <span className="browser-window__button close"></span>
                  <span className="browser-window__button minimise"></span>
                  <span className="browser-window__button enlarge"></span>
                </div>
                <div className="browser-window__content">
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
                </div>
              </div>
            )}
          />
          <Route exact path="/:id" component={ProjectDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
