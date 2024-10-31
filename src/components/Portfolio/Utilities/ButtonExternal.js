import React from "react";

function ButtonPrimaryExt(props) {
  const {classes, link, title} = props;
  return (
    <React.Fragment>
      <a
        className={`${"btn btn-primary"} ${classes}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </React.Fragment>
  );
}

export default ButtonPrimaryExt;
