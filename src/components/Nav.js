import React from 'react';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navigation: [
        {id: 1, title: 'About', href: '#about'},
        {id: 2, title: 'Contact', href: '#contact'}
      ]
    }
  }

  render() {

    const items = this.state.navigation.map((item, key) =>
      <li key={item.id}>
        <a href={item.href}>{item.title}</a>
      </li>
    );

    return (
      <div className="section-margin">
        <nav>
          <ul className="text-align__center">
            {items}
          </ul>
        </nav>
      </div>
    );
  }
}
