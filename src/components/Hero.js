import React from 'react';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="intro text-align__center section-margin">
        <h1>Hello, I'm Luke. A Frontend Developer,
          <br /> Photographer and Motorbike Rider.
        </h1>
        <a href="#projects"><i className="fas fa-chevron-down"></i></a>
      </div>
    )
  }
}
