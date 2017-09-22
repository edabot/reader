import React, { Component } from 'react'

import TopArticle from './topArticle'
import StubArticle from './stubarticle'
import Article from './article'

export default class ArticleList extends Component {

  render() {
    return (
      <div>
        <div id="top_stories">Top Stories</div>
        <div id="top_article_group">
          <TopArticle article={ this.props.articles[0] } setArticle={ this.props.setArticle  } />
          <div>
            <StubArticle article={ this.props.articles[1] } setArticle={ this.props.setArticle } />
            <StubArticle article={ this.props.articles[2] } setArticle={ this.props.setArticle } />
          </div>
        </div>
        {
           this.props.articles.slice(3).map(article => {
             return <Article key={article._id} article={article} setArticle={ this.props.setArticle }/>;
           })
         }
      </div>
    )
  }
}
