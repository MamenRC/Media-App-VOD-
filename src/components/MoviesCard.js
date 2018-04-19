import React from 'react';

class MoviesCard extends React.Component {
  render() {
    return (
    <div className="div__container">
      <h2 className="container__link">
        <a className="link" href={this.props.url} target="_blank">{this.props.title}</a>
      </h2>
      <p className="container__description">{this.props.description}</p>
      <span className="container__description">{this.props.movie}</span>
    </div>
    );
  }
}

export default MoviesCard;
