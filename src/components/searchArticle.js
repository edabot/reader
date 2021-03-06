import React, { Component } from 'react'

export default class SearchArticle extends Component {

  imageBox() {
    if ( this.props.article.multimedia[0] ) {
      return (
        <img src={'http://nytimes.com/' + this.props.article.multimedia[0].url} />
      )
    }
  }

  setArticle() {
    this.props.setArticle( this.props.article )
  }

  render() {
    let article = this.props.article

    return (
      <div className="search_article" onClick={ this.setArticle.bind(this) }>
        <div className="article_image">
          { this.imageBox() }
        </div>
        <div className="article_info">
          <div className="article_title">
            { article.headline.main }
          </div>
          <div className="article_snippet">
            { article.snippet }
          </div>
        </div>
      </div>
    )
  }
}
