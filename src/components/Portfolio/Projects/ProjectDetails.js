import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectData from "../../../Data/Projects.json";
import SubProjectData from "../../../Data/SubProjects.json";
import AboutData from "../../../Data/About.json";
import BrowserWindow from "../Browser/BrowserWindow";
import AppFolder from "../AppFolder/AppFolder";

function ProjectDetails() {
  const [id] = useState(useParams().id),
    [url, setUrl] = useState(""),
    [logo, setLogo] = useState(""),
    [headline, setHeadline] = useState(""),
    [brief, setBrief] = useState(""),
    [approach, setApproach] = useState(""),
    [role, setRole] = useState(""),
    [whatwentwell, setWell] = useState(""),
    [whatyoudchange, setWhatyoudchange] = useState(""),
    [title, setTitle] = useState(""),
    [name, setName] = useState(""),
    [description, setDescription] = useState("");

  useEffect(() => {
    for (let i = 0; i < ProjectData.length; i++) {
      let obj = ProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setLogo(obj.logo);
        setHeadline(obj.headline);
        setBrief(obj.brief);
        setApproach(obj.approach);
        setRole(obj.role);
        setWell(obj.whatwentwell);
        setWhatyoudchange(obj.whatyoudchange);
      }
    }
    for (let i = 0; i < SubProjectData.length; i++) {
      let obj = SubProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setHeadline(obj.headline);
        setBrief(obj.brief);
        setApproach(obj.approach);
        setRole(obj.role);
        setWell(obj.whatwentwell);
        setWhatyoudchange(obj.whatyoudchange);
      }
    }
    for (let i = 0; i < AboutData.length; i++) {
      let obj = AboutData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setTitle(obj.title);
        setName(obj.name);
        setDescription(obj.description);
      }
    }
  }, [id]);
  return (
    <div>
      {!url ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1> 404: Page Not Found</h1>
          </div>
          <a className="btn btn-primary" href="/">
            Return to home
          </a>
        </div>
      ) : (
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col md={10} lg={10}>
              <BrowserWindow
                hasDrag={false}
                classes={`${"browser-window--project-page"} ${
                  url + "--project-page"
                }`}
                tab={`${url} ${"casestudy"}`}
              >
                <div className={`${"project-details"} ${url}`} id={`${id}`}>
                  <div className="project-details__header">
                    <Container>
                      {logo ? (
                        <div className="projects__logo">
                          <img
                            width="100%"
                            height="100%"
                            src={logo}
                            alt={`${url} ${"logo"}`}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {headline ? <h1>{headline}</h1> : ""}
                      {title ? (
                        <h1>
                          {name} {title}
                        </h1>
                      ) : (
                        ""
                      )}
                    </Container>
                  </div>
                  <div className="project-details__content">
                    <Container>
                      <Row>
                        <Col>
                          <h2>title</h2>
                          <p>text</p>
                          <div className="project-details__information">
                            <div className="project-details__site">
                              <h3>Live site</h3>
                              <p>
                                <a
                                  href="/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link
                                </a>
                              </p>
                            </div>
                            <div className="project-details__stack">
                              <h3>Stack</h3>
                              <p></p>
                            </div>
                          </div>
                        </Col>
                        <Col>IMG</Col>
                      </Row>
                      <Row>
                        <Col>IMG</Col>
                        <Col>
                          {approach ? (
                            <div className="project-details__approach">
                              <h2>What the approach of the project was</h2>
                              <p>{approach}</p>
                            </div>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col></Col>
                        <Col>IMG</Col>
                      </Row>
                      {brief ? <p>{brief}</p> : ""}
                      {role ? <p>{role}</p> : ""}
                      {whatwentwell ? <p>{whatwentwell}</p> : ""}
                      {whatyoudchange ? <p>{whatyoudchange}</p> : ""}
                      {description ? <p>{description}</p> : ""}
                    </Container>
                  </div>
                </div>
              </BrowserWindow>
            </Col>
            <Col md={2} lg={1}>
              <AppFolder />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ProjectDetails;
