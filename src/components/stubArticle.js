import React, { Component } from 'react'

export default class ArticleList extends Component {

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
    let article = this.props.article,
        time = new Date(this.props.article.pub_date).toLocaleTimeString()
    let timeString = time.substring(0, time.length - 6) + time.substring(time.length - 3) + ' ET'

    return (
      <div className="article" onClick={ this.setArticle.bind(this) }>
        <div className="article_info">
          <div className="article_title">
            { this.props.article.headline.main }
          </div>
          <div className="article_credit">
            { this.props.article.byline.original + ' '}
            <span className="article_time">{ timeString }</span>
          </div>
        </div>
      </div>
    )
  }
}
