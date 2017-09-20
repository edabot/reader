import React, { Component } from 'react';

import Header from './header'
import ArticleList from './articleList'

import ListActions from '../actions/listActions'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      page: 0,
      articles: []
    };
  }

  componentDidMount() {
    ListActions.getList(this.state.page, this.receiveList.bind(this))
  }

  receiveList( articles ) {
    this.setState({ articles: articles})
  }

  pageUp() {
    let newPage = this.state.page + 1
    this.setState( { page: newPage } )
    ListActions.getList(newPage, this.receiveList.bind(this))
  }

  pageDown() {
    if ( this.state.page > 0 ) {
      let newPage = this.state.page - 1
      this.setState( { page: newPage } )
      ListActions.getList(newPage, this.receiveList.bind(this))
    }
  }

  setSearch( searchTerm ) {
    this.setState({ searchTerm: searchTerm })
    console.log( searchTerm )
  }

  render() {
    return (
      <div>
        <Header setSearch={ this.setSearch.bind(this) }/>
        <ArticleList articles={this.state.articles} />
        <div onClick={this.pageDown.bind(this)}>previous</div>
        <div onClick={this.pageUp.bind(this)}>next</div>
      </div>
    )
  }
}
