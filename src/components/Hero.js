import React from 'react';
import { Link } from 'react-scroll';
import { Event } from './Tracking';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="intro text-align__center section-margin">
        <h1>Hello, I'm Luke. A Frontend Developer,
          <br /> Photographer and Motorbike Rider.
        </h1>
        <Link
          href="#projects"
          to="#projects"
          spy={true}
          smooth={true}
          duration={800}
          aria-label="Scroll to projects"
          onClick={() => {Event("scroll", "headerScroll", "header chevron clicked");}}
        >
            <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    )
  }
}
