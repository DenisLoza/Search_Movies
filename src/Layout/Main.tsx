import React from "react"
import Movies, {propsMoviesType} from "../Components/Movies"


export default class Main extends React.Component {

  state: propsMoviesType = {
    movies: [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}]
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=7ea62270&s=matrix")
      .then(responce => responce.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return <div className="container content">
      {this.state.movies[0].imdbID === ""
        ? <h5>Loading...</h5>
        : <Movies movies={this.state.movies}/>}
    </div>
  }

}