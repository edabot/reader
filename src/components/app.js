import React, { Component } from 'react';

import Header from './header'
import ArticleList from './articleList'
import SearchList from './searchList'
import FullArticle from './fullArticle'
import './main.scss'
import ListActions from '../actions/listActions'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      page: 0,
      articles: [],
      currentArticle: null
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
    window.scrollTo( 0, 0 )
  }

  pageDown() {
    if ( this.state.page > 0 ) {
      let newPage = this.state.page - 1
      this.setState( { page: newPage } )
      this.getList(newPage, this.state.searchTerm)
      window.scrollTo( 0, 0 )
    }
  }

  setSearch( searchTerm ) {
    this.setState({ page: 0, searchTerm: searchTerm, currentArticle: null })
    this.getList( 0, searchTerm )
  }

  resetPage() {
    this.setState({ page: 0, searchTerm: "", articles: [], currentArticle: null })
    this.getList( 0, "" )
  }

  setArticle(url) {
    this.setState({ currentArticle: url })
  }

  content() {
    if ( this.state.currentArticle ) {
      return (
        <FullArticle resetPage={this.resetPage.bind(this)} article={ this.state.currentArticle }/>
      )
    } else if ( this.state.searchTerm.length > 0 ) {
      return (
        <div>
          <SearchList resetPage={this.resetPage.bind(this)} articles={this.state.articles} setArticle={ this.setArticle.bind(this) }/>
          <div id="page_buttons">
            <button onClick={this.pageDown.bind(this)}>previous</button>
            <button onClick={this.pageUp.bind(this)}>next</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <ArticleList articles={this.state.articles} setArticle={ this.setArticle.bind(this) }/>
          <div id="page_buttons">
            <button onClick={this.pageDown.bind(this)}>previous</button>
            <button onClick={this.pageUp.bind(this)}>next</button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Header resetPage={this.resetPage.bind(this)} setSearch={ this.setSearch.bind(this) }/>
        <div id="content">
          { this.content() }
        </div>
      </div>
    )
  }
}
