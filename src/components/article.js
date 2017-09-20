import React, { Component } from 'react'

export default class ArticleList extends Component {

  imageBox() {
    if ( this.props.article.multimedia[0] ) {
      return (
        <img src={'http://nytimes.com/' + this.props.article.multimedia[0].url} />
      )
    }
  }

  snippet() {
    let snippet = this.props.article.snippet
    if ( snippet.length < 170) {
      return snippet
    }
    snippet = snippet.substring(0, 170)
    let lastSpace = snippet.lastIndexOf(' ')
    return snippet.substring(0, lastSpace) + '...'
  }

  render() {
    let article = this.props.article,
        time = new Date(this.props.article.pub_date).toLocaleTimeString()
    let timeString = time.substring(0, time.length - 6) + time.substring(time.length - 3) + ' ET'

    return (
      <div className="article">
        <div className="article_image">
          { this.imageBox() }
        </div>
        <div className="article_info">
          <div className="article_title">
            { this.props.article.headline.main }
          </div>
          <div className="article_snippet">
            { this.snippet() }
          </div>
          <div className="article_credit">
            { this.props.article.byline.original + ' '}
            <span className="article_time">{timeString}</span>
          </div>
        </div>
      </div>
    )
  }
}
