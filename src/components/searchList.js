import React, { Component } from 'react'

import Article from './article'

export default class SearchList extends Component {

  render() {
    return (
      <div id="search_list">
        <div>Home > Search</div>
        {
           this.props.articles.map(article => {
             return <SearchArticle key={article.uri} article={article} setArticle={ this.props.setArticle }/>;
           })
         }
      </div>
    )
  }
}
