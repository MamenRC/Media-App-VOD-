import React from 'react';
import MoviesCard from './MoviesCard';

class MoviesList extends React.Component {
  render() {
    return (
    <ol className="container__movies">
      {
        this.props.moviesShow
        .map (
          informationMovies => <li>
            <MoviesCard url={informationMovies.url}
            title={informationMovies.title}
            description={informationMovies.description}
            movie={informationMovies.type} />
          </li>
        )
      }
    </ol>
    );
  }
}

export default MoviesList;
