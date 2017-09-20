import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  updateSearch(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.setSearch( this.state.searchTerm )
  }

  render() {
    return (
      <div>
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input type="search"
          onChange={ this.updateSearch.bind(this) }
        />
        </form>
      </div>
    )
  }
}
