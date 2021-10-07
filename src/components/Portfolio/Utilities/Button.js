import React from "react";

function ButtonPrimary(props) {
  const {classes, link, title} = props;
  return (
    <React.Fragment>
      <a
        className={`${"btn btn-primary"} ${classes}`}
        href={link}
        target="_self"
        rel="bookmark"
      >
        {title}
      </a>
    </React.Fragment>
  );
}

export default ButtonPrimary;
