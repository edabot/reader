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
    this.getList(this.state.page, this.state.searchTerm)
  }

  getList( page, searchTerm ) {
    ListActions.getList(page, searchTerm, this.receiveList.bind(this))
  }

  receiveList( articles ) {
    this.setState({ articles: articles})
  }

  pageUp() {
    let newPage = this.state.page + 1
    this.setState( { page: newPage } )
    this.getList(newPage, this.state.searchTerm)
  }

  pageDown() {
    if ( this.state.page > 0 ) {
      let newPage = this.state.page - 1
      this.setState( { page: newPage } )
      this.getList(newPage, this.state.searchTerm)
    }
  }

  setSearch( searchTerm ) {
    this.setState({ page: 0, searchTerm: searchTerm })
    this.getList(0, searchTerm)
  }

  resetPage() {
    this.setState({ page: 0, searchTerm: "" })
    this.getList(0, "")
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
