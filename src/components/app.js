import React, { Component } from 'react';

import Header from './header'
import ArticleList from './articleList'

import ListActions from '../actions/listActions'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      page: 1,
      articles: []
    };
  }

  componentDidMount() {
    ListActions.getList(this.state.page, this.receiveList.bind(this))
  }

  receiveList(articles) {
    console.log(articles)
    this.setState({ articles: articles})
  }

  pageUp() {
    this.setState( { page: this.state.page + 1 } )
  }

  pageDown() {
    this.setState( { page: this.state.page - 1 } )
  }

  render() {
    return (
      <div>
        <Header />
        <ArticleList articles={this.state.articles} />
      </div>
    )
  }
}
