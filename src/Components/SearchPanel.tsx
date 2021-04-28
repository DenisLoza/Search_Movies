import React from "react"

type stateSearchPanelType = {
  search: string
}
type propsSearchPanelType = {
  cbSearch: (dataSearch: string) => void
}

export default class SearchPanel extends React.Component<propsSearchPanelType, stateSearchPanelType> {

  constructor(props: propsSearchPanelType) {
    super(props)
    this.state = {
      search: ""
    }
  }


  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({search: e.target.value}))
  }
  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.cbSearch(this.state.search)
    }
  }
  handleBtnPress = () => {
    this.props.cbSearch(this.state.search)
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
      </div>
    )
  }

}