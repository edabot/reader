import React, { Component } from 'react'

import SearchBar from './searchBar'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="titlebar">
          <div id="title">THE TIMES</div>
          <div id="search_bar">
            <SearchBar setSearch={ this.props.setSearch }/>
          </div>
        </div>
        <div id="categories">
          <div>Home</div>
          <div>World</div>
          <div>U.S.</div>
          <div>Politics</div>
          <div>N.Y.</div>
          <div>More</div>
        </div>
      </div>
    )
  }
}
