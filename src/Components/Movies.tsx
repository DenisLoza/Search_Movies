import React from "react"
import Movie, {propsMovieType} from "./Movie"


export type propsMoviesType = {
  movies: Array<propsMovieType>
}

export default function Movies(props: propsMoviesType) {
  return (
    <div className="movies">
      {/*Если ничего не придет в пропсах, т.е. ошибка от сервера (значение массива Undefined)*/}
      {props.movies
        ? props.movies.map(cardMovie => (
          <Movie key={cardMovie.imdbID}
                 Title={cardMovie.Title}
                 Year={cardMovie.Year}
                 imdbID={cardMovie.imdbID}
                 Type={cardMovie.Type}
                 Poster={cardMovie.Poster}
          />
        ))
        : "Nothing found, please try again!"
      }
    </div>
  )
}