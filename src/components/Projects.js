import React from 'react';
import { Event } from './Tracking';
import desktopIcon from '../assets/images/icons/desktop_icon.svg';
import tabletIcon from '../assets/images/icons/ipad_icon.svg';
import mobileIcon from '../assets/images/icons/mobile_icon.svg';

export default class Projects extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      projectContent: [
        {id: 1, title: 'The Macallan', text: 'The Masters of Photography was a really great project for me, it included one of my passions Photography and I also like the odd whisky on occasion.', textExtend: 'This project taught me a few new things too: better naming conventions for classes(BEM), building initial layouts using Handlebars and re- using components which sped up the build. This project also taught me to make sure my code and comments were at a high standard due to commiting changes to the clients repository.', href: 'https://bit.ly/2PB9ik0', class: 'macallan'},
        {id: 2, title: 'Mulberry Japan', text: 'Mulberry Japan was an interesting project, there were a lot of people involved and rather a large time difference to think about. But even with a large team, language barriers and time differences there was good communication and logical thinking which pushed this project on.', textExtend: 'I mainly worked on the CSS for this project, making sure the quality of the site was true to the quality of Mulberry as a brand. (Sadly I didn\'t learn any Japanese).', href: 'https://jp.mulberry.com/', class: 'mulberry'},
        {id: 3, title: 'Hiscox', text: 'My latest project has been working with Hiscox as the Business Insurance team had their entire sector redesigned.', textExtend: 'In an effort to bring newer technologies to this project I have used ES6 practises to make the JS easier and cleaner to read. I have also been keeping an eye on the Google audit tab in the inspector, making sure all of the scores are great.', span: '*This project is yet to go live and therefore cannot show the new design and build.', href: 'https://www.hiscox.co.uk/', class: 'hiscox'},
        {id: 4, title: 'Run Digital', text: 'Run Digital tasked me with designing and developing their portfolio website. The aim was to create a single page site that felt sleek, modern and full of rich content.', textExtend: 'This was an early project for me, it introduced me to PHP, HTML5 and CSS3.The part of this project I enjoyed most was building my design and seeing how adding certain interactions in CSS gave the project life. Using Wordpress meant that they would be able to keep the site fresh with new current projects.The gold and grey colours offer a level of sophistication to go alongside the rest of the sites styling.', href: 'https://rundigital.co.uk/', class: 'run'},
        {id: 5, title: 'Citrus Enterprise', text: 'Citrus Enterprise is a hands-on business coaching company that looks to grow their clients businesses long term. With their different approach to business growth, Citrus Enterprise required a website that stood out from the rest of the industry competition. ', textExtend: 'I designed this website using Sketch and the build uses Wordpress as a CMS so that the client is able to keep the site up to date.The client and I had worked together on a previous corporate project which was quite rigid to this field but meant that we already had a good rapport.It wasn\'t until we worked on this project that I understood how important it was to have clear communication.', href: 'https://citrusenterprise.com/', class: 'citrus'},
      ]
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  handleMouseEnter = (e) => {
    e.target.closest('.projects_wrapper').classList.add('is-hovered');
  }

  handleMouseLeave = (e) => {
    e.target.closest('.projects_wrapper').classList.remove('is-hovered');
  }

  render() {

    const projectItems = this.state.projectContent.map((item, key) =>
    <div key={item.id} className={[item.class, "projects_wrapper"].join(' ')}>
      <div className="col-4 section-margin">
        <h2 className="title">{item.title}</h2>
        <p className="text">{item.text}
        <br />
        <br />
        {item.textExtend}</p>
        <p><small>{item.span}</small></p>
        <div className="device-icons_wrapper" onMouseEnter={(e) => this.handleMouseEnter(e)} onMouseLeave={(e) => this.handleMouseLeave(e)}>
          <img className="device-icons device-icons_desktop" src={desktopIcon} alt="icon desktop computer" />
          <div className="device-icons_grouped">
            <img className="device-icons device-icons_ipad" src={tabletIcon} alt="icon tablet device" />
            <img className="device-icons device-icons_mobile" src={mobileIcon} alt="icon mobile device" />
          </div>
        </div>
        <a
          className="web-link"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {Event("project", "viewLiveSite", `${item.title}`);}}
        >
          View live site
          <span className="arrow_right"></span>
        </a>
      </div>
      <div className="col-6 section-margin_slides">
        <div className="project-image_wrapper">
          <div className="project-image_background default"></div>
          <div className="project-image_background device-image"></div>
        </div>
      </div>
    </div>
    );

    return (
      <section className="projects" id="projects" name="#projects">
        {projectItems}
      </section>
    )
  }
}
