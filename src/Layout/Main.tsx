import React from "react"
import Movies, {propsMoviesType} from "../Components/Movies"
import Preloader from "../Components/Preloader"
import SearchPanel from "../Components/SearchPanel"


export default class Main extends React.Component {

  state: propsMoviesType = {
    movies: [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}]
  }

  callbackSearch = (dataSearch: string, typeMovies: string) => {
      fetch(`http://www.omdbapi.com/?apikey=7ea62270&s=${dataSearch}${typeMovies === "all" ? "" : `&type=${typeMovies}`}`)
        .then(responce => responce.json())
        .then(data => this.setState({movies: data.Search}))

  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=7ea62270&s=matrix")
      .then(responce => responce.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return (
      <div className="container content">
        <SearchPanel cbSearch={this.callbackSearch}
        />
        {this.state.movies[0].imdbID === ""
          ? <Preloader/>
          : <Movies movies={this.state.movies}/>}
      </div>
    )
  }

}