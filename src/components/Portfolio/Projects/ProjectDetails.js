import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectData from "../../../Data/Projects.json";
import SubProjectData from "../../../Data/SubProjects.json";
import AboutData from "../../../Data/About.json";
import WorkExperienceData from "../../../Data/WorkExperience.json";
import BrowserWindow from "../Browser/BrowserWindow";
import AppFolder from "../AppFolder/AppFolder";
import Contact from "../Contact/Contact";

function ProjectDetails() {
  const [id] = useState(useParams().id),
    [url, setUrl] = useState(""),
    [logo, setLogo] = useState(""),
    [headline, setHeadline] = useState(""),
    [section_1_title, setSection1Title] = useState(""),
    [section_1_text, setSection1Text] = useState(""),
    [section_1_image, setSection1Image] = useState(""),
    [live_site, setLiveSite] = useState(""),
    [alias, setAlias] = useState(""),
    [stack, setStack] = useState(""),
    [section_2_text, setSection2Text] = useState(""),
    [section_2_image, setSection2Image] = useState(""),
    [section_3_text, setSection3Text] = useState(""),
    [section_3_image, setSection3Image] = useState(""),
    [intro, setIntro] = useState(""),
    [description, setDescription] = useState(""),
    [stack_skills, setStackSkills] = useState("");

  useEffect(() => {
    for (let i = 0; i < ProjectData.length; i++) {
      let obj = ProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setLogo(obj.logo);
        setHeadline(obj.headline);
        setSection1Title(obj.section_1_title);
        setSection1Text(obj.section_1_text);
        setSection1Image(obj.section_1_image);
        setLiveSite(obj.live_site);
        setAlias(obj.alias);
        setStack(obj.stack);
        setSection2Text(obj.section_2_text);
        setSection2Image(obj.section_2_image);
        setSection3Text(obj.section_3_text);
        setSection3Image(obj.section_3_image);
      }
    }
    for (let i = 0; i < SubProjectData.length; i++) {
      let obj = SubProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setHeadline(obj.headline);
        setSection1Title(obj.section_1_title);
        setSection1Text(obj.section_1_text);
        setSection1Image(obj.section_1_image);
        setLiveSite(obj.live_site);
        setAlias(obj.alias);
        setStack(obj.stack);
        setSection2Text(obj.section_2_text);
        setSection2Image(obj.section_2_image);
        setSection3Text(obj.section_3_text);
        setSection3Image(obj.section_3_image);
      }
    }
    for (let i = 0; i < AboutData.length; i++) {
      let obj = AboutData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setIntro(obj.intro);
        setDescription(obj.description);
        setStackSkills(obj.stack_skills);
      }
    }
  }, [id]);

  const placesWorked = WorkExperienceData.map((item, index) => {
    return (
      <div className="about__work-experience" key={index}>
        <div className="about__company-logo">
          <img src={item.logo} alt={item.company} />
        </div>
        <div className="about__work-content">
          <h3 className="about__work-title">
            {item.job_role} @{" "}
            <a
              className="about__work-link"
              href={item.company_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.company}
            </a>
          </h3>
          <p className="about__work-period">{item.work_period}</p>
          <ul className="about__work-list">
            {item.experience.map((listItem, index) => (
              <li key={index}>
                <p>{listItem}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div>
      {!url ? (
        <div className="error-page">
          <div className="error-page__content">
            <div className="error-page__message">
              <h1>404: Page Not Found</h1>
            </div>
            <div className="error-page__button">
              <a className="btn btn-primary" href="/">
                Return to home
              </a>
            </div>
          </div>
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
                      {logo && (
                        <div className="projects__logo">
                          <img
                            width="100%"
                            height="100%"
                            src={logo}
                            alt={`${url} ${"logo"}`}
                          />
                        </div>
                      )}
                      {headline && <h1>{headline}</h1>}
                      {intro && (
                        <Row>
                          <Col lg={6}>
                            <h1>{intro}</h1>
                          </Col>
                          <Col lg={6}>
                            <div className="about__image">
                              <img src="/images/about-me.jpg" alt="" />
                            </div>
                          </Col>
                        </Row>
                      )}
                    </Container>
                  </div>
                  <div className="project-details__content">
                    <Container>
                      <Row>
                        <Col xl={6}>
                          {section_1_title && <h2>{section_1_title}</h2>}
                          {section_1_text && <p>{section_1_text}</p>}
                          {live_site && (
                            <div className="project-details__information">
                              <div className="project-details__site">
                                <h3>Live site</h3>
                                <p>
                                  <a
                                    href={live_site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {alias}
                                  </a>
                                </p>
                              </div>
                              <div className="project-details__stack">
                                <h3>Stack</h3>
                                <p>{stack}</p>
                              </div>
                            </div>
                          )}
                          {description && (
                            // ABOUT Desc
                            <div className="about__description">
                              <h2>A bit about me</h2>
                              {AboutData[0].description.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                              ))}
                            </div>
                          )}
                        </Col>
                        <Col xl={6}>
                          {section_1_image && (
                            <div className="project-details__image">
                              <img src={section_1_image} alt="" />
                            </div>
                          )}
                          {stack_skills && (
                            <div className="about__skills">
                              <h3 className="about__skills__title">
                                Stack and skills
                              </h3>
                              <ul>
                                {AboutData[0].stack_skills.map(
                                  (listItem, i) => (
                                    <li key={i}>{listItem}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Container>
                    {url === "about" ? (
                      <section className="about__work-section">
                        <Container>
                          <Row>
                            <Col xl={10}>
                              <div className="about__work-section-content">
                                <h3>Where I've worked</h3>
                                <p>
                                  I’ve had the privilege of working in a variety
                                  of agencies meaning I’ve worked with over 30
                                  different clients ranging from finance,
                                  charties and big household named brands.
                                </p>
                              </div>
                              {placesWorked}
                            </Col>
                          </Row>
                        </Container>
                      </section>
                    ) : (
                      <Container>
                        <Row>
                          <Col xl={6}>
                            {section_2_image && (
                              <div className="project-details__image">
                                <img src={section_2_image} alt="" />
                              </div>
                            )}
                          </Col>
                          <Col xl={6}>
                            {section_2_text && (
                              <div className="project-details__approach">
                                <h2>What the approach of the project was</h2>
                                <p>{section_2_text}</p>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    )}
                    {url === "about" ? (
                      ""
                    ) : (
                      <Container>
                        <Row>
                          <Col xl={6}>
                            {section_3_text && (
                              <div className="project-details__approach">
                                <h2>What the outcome was of the project</h2>
                                <p>{section_3_text}</p>
                              </div>
                            )}
                          </Col>
                          <Col xl={6}>
                            {section_3_image && (
                              <div className="project-details__image">
                                <img src={section_3_image} alt="" />
                              </div>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    )}
                    <Contact />
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
