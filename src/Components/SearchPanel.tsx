import React from "react"

type stateSearchPanelType = {
  search: string
  typeMovies: string
}
type propsSearchPanelType = {
  cbSearch: (dataSearch: string, typeMovies: string) => void
}

export default class SearchPanel extends React.Component<propsSearchPanelType, stateSearchPanelType> {

  constructor(props: propsSearchPanelType) {
    super(props)
    this.state = {
      search: "",
      typeMovies: "all"
    }
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({search: e.target.value}))
  }
  handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({typeMovies: e.target.value}))
  }

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.cbSearch(this.state.search, this.state.typeMovies)
    }
  }
  handleBtnPress = () => {
    this.props.cbSearch(this.state.search, this.state.typeMovies)
  }



  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input className="validate"
                 type="search"
                 placeholder="search"
                 value={this.state.search}
                 onChange={this.handleSearch}
                 onKeyPress={this.handleKeyPress}
          />
          <button className="btn blue darken-2 btn-search"
                  onClick={this.handleBtnPress}
          >search
          </button>
        </div>
        <div>
          <label>
            <input className="with-gap"
                   type="radio"
                   name="radioCheck"
                   value="all"
                   checked={this.state.typeMovies === "all"}
                   onChange={this.handleRadioCheck}
                   onKeyPress={this.handleKeyPress}
            />
            <span>All</span>
          </label>
          <label>
            <input className="with-gap"
                   type="radio"
                   name="radioCheck"
                   value="movie"
                   checked={this.state.typeMovies === "movie"}
                   onChange={this.handleRadioCheck}
                   onKeyPress={this.handleKeyPress}
            />
            <span>Movie</span>
          </label>
          <label>
            <input className="with-gap"
                   type="radio"
                   name="radioCheck"
                   value="series"
                   checked={this.state.typeMovies === "series"}
                   onChange={this.handleRadioCheck}
                   onKeyPress={this.handleKeyPress}
            />
            <span>Series</span>
          </label>
          </div>
      </div>
    )
  }

}