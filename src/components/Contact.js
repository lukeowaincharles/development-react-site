import React from 'react';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      socialNavigation: [
        {id: 1, title: 'Github', href: 'https://github.com/lukeowaincharles', class: 'fa-github-square', ariaLabel: 'Link to Luke Charles Github'},
        {id: 2, title: 'Instagram', href: 'https://www.instagram.com/lzealot/', class: 'fa-instagram', ariaLabel: 'Link to Luke Charles Instagram'},
        {id: 3, title: 'Linkedin', href: 'https://www.linkedin.com/in/luke-charles-01a58070/', class: 'fa-linkedin', ariaLabel: 'Link to Luke Charles Linkedin'}
      ]
    }
  }

  render() {

    const items = this.state.socialNavigation.map((item, key) =>
      <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}><i className={[item.class, "fab"].join(' ')}></i></a>
    );

    return (
      <div className="contact" name="#contact" id="contact">
        <h2 className="title">Contact</h2>
        <p className="text">The best place for you to get in touch is through my email
          <br/><a href="mailto:lukeowaincharles@gmail.com">lukeowaincharles@gmail.com</a>
        </p>
        <div className="social">
          {items}
        </div>
      </div>
    );
  }
}
