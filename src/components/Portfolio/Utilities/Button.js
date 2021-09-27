import React from "react";

function ButtonPrimary(props) {
  return (
    <React.Fragment>
      <a
        className={`${"btn btn-primary"} ${props.classes}`}
        href={props.link}
        target="_self"
        rel="bookmark"
      >
        {props.title}
      </a>
    </React.Fragment>
  );
}

export default ButtonPrimary;
