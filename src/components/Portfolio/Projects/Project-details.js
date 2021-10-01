import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectData from "../../../Data/Projects.json";
import BrowserWindow from "../Browser/BrowserWindow";

function ProjectDetails() {
  const [id] = useState(useParams().id),
    [url, setUrl] = useState(""),
    [headline, setHeadline] = useState(""),
    [brief, setBrief] = useState(""),
    [approach, setApproach] = useState(""),
    [role, setRole] = useState(""),
    [whatwentwell, setWell] = useState(""),
    [whatyoudchange, setWhatyoudchange] = useState("");

  useEffect(() => {
    for (let i = 0; i < ProjectData.length; i++) {
      let obj = ProjectData[i];
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
  }, [id]);
  return (
    <div>
      {!url ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1> 404: Page Not Found</h1>
          </div>
          <a className="btn btn-primary" href="/">Return to home</a>
        </div>
      ) : (
        <BrowserWindow hasDrag={false} classes={`${"browser-window--project-page"} ${url + "--project-page"}`} tab={`${url} ${"casestudy"}`}>
          <div className="project-details" id={`${id}`}>
            <div className="project-details__header">
              <Container>
                {headline ? <h1>{headline}</h1> : ""}
              </Container>
            </div>
            <div className="project-details__content">
              <Container>
                {brief ? <p>{brief}</p> : ""}
                {approach ? <p>{approach}</p> : ""}
                {role ? <p>{role}</p> : ""}
                {whatwentwell ? <p>{whatwentwell}</p> : ""}
                {whatyoudchange ? <p>{whatyoudchange}</p> : ""}
              </Container>
            </div>
          </div>
        </BrowserWindow>
      )}
    </div>
  );
}

export default ProjectDetails;
