import React, { Component } from 'react'

import SearchArticle from './searchArticle'

export default class SearchList extends Component {

  render() {
    return (
      <div>
        <div>Home > Search</div>
        <div id="search_articles">
        {
           this.props.articles.map(article => {
             return <SearchArticle key={article._id} article={article} setArticle={ this.props.setArticle }/>;
           })
         }
         </div>
      </div>
    )
  }
}
