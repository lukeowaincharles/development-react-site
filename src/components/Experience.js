import React from 'react';

export default class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      column: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
      ],
      experience: [
        {id: 'experienceItem-1', title: 'HTML5'},
        {id: 'experienceItem-2', title: 'SCSS'},
        {id: 'experienceItem-3', title: 'LESS'},
        {id: 'experienceItem-4', title: 'Drupal'},
        {id: 'experienceItem-5', title: 'Magento'},
        {id: 'experienceItem-6', title: 'Wordpress'},
        {id: 'experienceItem-7', title: 'Npm'},
        {id: 'experienceItem-8', title: 'Gulp'},
        {id: 'experienceItem-9', title: 'Grunt'},
        {id: 'experienceItem-10', title: 'Zeplin'},
        {id: 'experienceItem-11', title: 'JS/jQuery'},
        {id: 'experienceItem-12', title: 'BEM'},
      ]
    }
  }

  
  render() {
      
    const items = this.state.experience.map((item, key) => 
      <li key={item.id}>{item.title}</li>
    );

    const columns = this.state.column.map((item, key) =>
      <div key={item.id} className="col-small">
        <ul className="text">
          {(items).splice(0, 3)}
        </ul>
      </div>
    );

    return (
      <div className="experience">
        <h2 className="title">Experience</h2>
        <div className="experience_wrapper">
          {columns}
        </div>
      </div>
    )
  }
}
