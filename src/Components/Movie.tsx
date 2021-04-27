import React from "react"
import img from "../images/sample-1.jpg"


export type propsMovieType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Movie(props: propsMovieType) {

  return <div id={props.imdbID} className="card">
    <div className="card-image waves-effect waves-block waves-light">
      {props.Poster === "N/A"
        ? <img className="activator" src={`https://via.placeholder.com/350x500.png?text=${props.Title}`}/>
        : <img className="activator" src={props.Poster}/>
      }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.Title}</span>
      <p>{props.Year} <span className="right">{props.Type}</span></p>
    </div>
  </div>
}