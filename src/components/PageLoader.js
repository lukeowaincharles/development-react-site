import React from 'react';

export default class PageLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 1500);
  }

  render() {

    const elements =['circ1', 'circ2', 'circ3', 'circ4', 'circ5', 'circ6', 'circ7', 'circ8', 'circ9', 'circ10'];

    return (
      <div>
        {!this.state.done ? (
          <div id="pageLoader" className="page-loader">
            <div className="page-loader__wrapper">
              {elements.map((value, index) => {
                return <div key={index} className={value}></div>
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
