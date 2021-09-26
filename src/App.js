import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/Portfolio/Project-details";
import "./App.scss";
import PageLoader from "./components/PageLoader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div className="App">HomePage</div>}
        />
        <Route
          exact
          path="/archive"
          render={() => (
            <div className="App">
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
          )}
        />
        <Route exact path="/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
