import React from 'react';
import { Link } from 'react-scroll';

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
        <Link href={item.href} to={item.href} spy={true} smooth={true} duration={800}>{item.title}</Link>
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
