import React from "react"
import Movie, {propsMovieType} from "./Movie"

export type propsMoviesType = {
  movies: Array<propsMovieType>
}

export default function Movies(props: propsMoviesType) {

  return <div className="movies">
    {props.movies.map(cardMovie => (
      <Movie key={cardMovie.imdbID}
             Title={cardMovie.Title}
             Year={cardMovie.Year}
             imdbID={cardMovie.imdbID}
             Type={cardMovie.Type}
             Poster={cardMovie.Poster}
      />
    ))
    }
  </div>
}