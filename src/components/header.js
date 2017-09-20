import React, { Component } from 'react'

import SearchBar from './searchBar'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="titlebar">
          <div id="title">THE TIMES</div>
          <div id="search_bar">
            <SearchBar />
          </div>
        </div>
        <div className="categories">
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
