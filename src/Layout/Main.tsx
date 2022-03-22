import React from "react"
import Movies from "../Components/Movies"
import Preloader from "../Components/Preloader"
import SearchPanel from "../Components/SearchPanel"


//const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY = "7ea62270"


export default class Main extends React.Component {

  state = {
    movies: [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}],
    loadingData: true
  }

  callbackSearch = (dataSearch: string, typeMovies: string) => {
    if (dataSearch !== "") {
      this.setState(() => ({loadingData: true}))
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${dataSearch}${typeMovies === "all" ? "" : `&type=${typeMovies}`}`)
        .then(responce => responce.json())
        .then(data => this.setState({movies: data.Search, loadingData: false}))
        .catch((err) => {
          console.error(err)
          this.setState({loadingData: false})
        })
    }
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(responce => responce.json())
      .then(data => this.setState({movies: data.Search, loadingData: false}))
      .catch((err) => {
        console.error(err)
        this.setState({loadingData: false})
      })
  }


  render() {
    return (
      <div className="container content">
        <SearchPanel cbSearch={this.callbackSearch}
        />
        {this.state.loadingData
          ? <Preloader/>
          : <Movies movies={this.state.movies}/>}
      </div>
    )
  }
}