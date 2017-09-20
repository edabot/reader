import React, { Component } from 'react'

import Article from './article'

export default class ArticleList extends Component {

  render() {
    return (
      <div>
      {
         this.props.articles.map(article => {
           return <Article key={article.uri} article={article} />;
         })
       }
      </div>
    )
  }
}