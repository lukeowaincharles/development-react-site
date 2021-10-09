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
import { motion } from "framer-motion";

function ProjectDetails() {
  const [id] = useState(useParams().id),
    [url, setUrl] = useState(""),
    [page, setPage] = useState(null),
    [aboutPage, setAboutPage] = useState(null);

  useEffect(() => {
    for (let i = 0; i < ProjectData.length; i++) {
      let obj = ProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setPage(obj);
      }
    }
    for (let i = 0; i < SubProjectData.length; i++) {
      let obj = SubProjectData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setPage(obj);
      }
    }
    for (let i = 0; i < AboutData.length; i++) {
      let obj = AboutData[i];
      if (obj.url === id) {
        setUrl(obj.url);
        setAboutPage(obj);
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
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            transition: {
              ease: "easeInOut",
              duration: 0.4,
            },
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeInOut",
              duration: 0.4,
            },
          }}
          key={id}
        >
          <BrowserWindow
            hasDrag={false}
            classes="page-not-found"
            tab="Page not found"
          >
            <div className="error-page">
              <div className="error-page__content">
                <div className="error-page__message">
                  <h1>404: Page Not Found</h1>
                  <p>
                    Whoooops this wasn't meant to happen, somehow the page
                    you're looking for does not exist.
                  </p>
                  <p>
                    If you can't find what you are looking for then get in touch
                    with me at{" "}
                    <a
                      href="mailto:lukeowaincharles@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lukeowaincharles@gmail.com
                    </a>
                  </p>
                </div>
                <div className="error-page__button">
                  <a className="btn btn-primary" href="/">
                    Return to home
                  </a>
                </div>
              </div>
            </div>
          </BrowserWindow>
        </motion.div>
      ) : (
        <Container>
          <Row>
            <Col md={10} lg={10}>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.75,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
                key={id}
              >
                <BrowserWindow
                  hasDrag={false}
                  classes={`${"browser-window--project-page"} ${
                    url + "--project-page"
                  }`}
                  tab={url === "about" ? aboutPage.tab : page.tab}
                >
                  <div className={`${"project-details"} ${url}`} id={`${id}`}>
                    <div className="project-details__header">
                      <Container>
                        {page?.logo && (
                          <div className="projects__logo">
                            <img
                              width="100%"
                              height="100%"
                              src={page.logo}
                              alt={`${url} ${"logo"}`}
                            />
                          </div>
                        )}
                        {page?.headline && <h1>{page.headline}</h1>}
                        {aboutPage?.intro && (
                          <Row>
                            <Col lg={6}>
                              <h1>{aboutPage.intro}</h1>
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
                      <div className="project-details__wrapper">
                        <Container>
                          <Row>
                            <Col xl={7}>
                              {page?.section_1_title && (
                                <h2>{page.section_1_title}</h2>
                              )}
                              {page?.section_1_text && (
                                <p>{page.section_1_text}</p>
                              )}
                              {page?.live_site && (
                                <div className="project-details__information">
                                  <div className="project-details__site">
                                    <h3>Live site</h3>
                                    <p>
                                      <a
                                        href={page.live_site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {page.alias}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="project-details__stack">
                                    <h3>Stack</h3>
                                    <p>{page.stack}</p>
                                  </div>
                                </div>
                              )}
                              {aboutPage?.description && (
                                // ABOUT Desc
                                <div className="about__description">
                                  <h2>A bit about me</h2>
                                  {aboutPage.description.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                  ))}
                                </div>
                              )}
                            </Col>
                            <Col
                              xl={5}
                              className={`${
                                url === "about" ? "about-details__column" : "project-details__column"
                              }`}
                            >
                              {page?.section_1_image && (
                                <div className="project-details__image project-details__image--one">
                                  <img src={page.section_1_image} alt="" />
                                </div>
                              )}
                              {aboutPage?.stack_skills && (
                                <div className="about__skills">
                                  <h3 className="about__skills__title">
                                    Stack and skills
                                  </h3>
                                  <ul>
                                    {aboutPage.stack_skills.map(
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
                      </div>
                      {url === "about" ? (
                        <section className="about__work-section">
                          <Container>
                            <Row>
                              <Col xl={10}>
                                <div className="about__work-section-content">
                                  <h3>Where I've worked</h3>
                                  <p>
                                    I’ve had the privilege of working in a
                                    variety of agencies meaning I’ve worked with
                                    over 30 different clients ranging from
                                    finance, charties and big household named
                                    brands.
                                  </p>
                                </div>
                                {placesWorked}
                              </Col>
                            </Row>
                          </Container>
                        </section>
                      ) : (
                        <div className="project-details__wrapper">
                          <Container>
                            <Row>
                              <Col xl={5} className="project-details__column">
                                {page?.section_2_image && (
                                  <div className="project-details__image project-details__image--two">
                                    <img src={page.section_2_image} alt="" />
                                  </div>
                                )}
                              </Col>
                              <Col xl={7}>
                                {page?.section_2_text && (
                                  <div className="project-details__approach">
                                    <h2>The approach</h2>
                                    {page.section_2_text.map(
                                      (paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                      )
                                    )}
                                  </div>
                                )}
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      )}
                      {url === "about" ? (
                        ""
                      ) : (
                        <>
                          <div className="project-details__wrapper">
                            <Container>
                              <Row>
                                <Col xl={7}>
                                  {page?.section_3_text && (
                                    <div className="project-details__approach">
                                      <h2>My role</h2>
                                      {page.section_3_text.map(
                                        (paragraph, index) => (
                                          <p key={index}>{paragraph}</p>
                                        )
                                      )}
                                    </div>
                                  )}
                                </Col>
                                <Col xl={5} className="project-details__column">
                                  {page?.section_3_image && (
                                    <div className="project-details__image project-details__image--three">
                                      <img src={page.section_3_image} alt="" />
                                    </div>
                                  )}
                                </Col>
                              </Row>
                            </Container>
                          </div>
                          <div className="project-details__wrapper">
                            <Container>
                              <Row>
                                <Col xl={5} className="project-details__column">
                                  {page?.section_4_image && (
                                    <div className="project-details__image project-details__image--four">
                                      <img src={page.section_4_image} alt="" />
                                    </div>
                                  )}
                                </Col>
                                <Col xl={7}>
                                  {page?.section_4_text && (
                                    <div className="project-details__approach">
                                      <h2>The outcome</h2>
                                      {page.section_4_text.map(
                                        (paragraph, index) => (
                                          <p key={index}>{paragraph}</p>
                                        )
                                      )}
                                    </div>
                                  )}
                                </Col>
                              </Row>
                            </Container>
                          </div>
                        </>
                      )}
                      <Contact />
                    </div>
                  </div>
                </BrowserWindow>
              </motion.div>
            </Col>
            <Col md={{ span: 2, offset: 1 }} lg={1}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: "100px",
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  x: "100px",
                  transition: {
                    ease: "easeInOut",
                    duration: 0.4,
                  },
                }}
              >
                <AppFolder />
              </motion.div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ProjectDetails;
