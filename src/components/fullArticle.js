import React, { Component } from 'react'

export default class fullArticle extends Component {

  imageBox() {
    if ( this.props.article.multimedia[0] ) {
      return (
        <img src={'http://nytimes.com/' + this.props.article.multimedia[0].url} />
      )
    }
  }

  render() {
    let article = this.props.article,
        time = new Date(this.props.article.pub_date).toLocaleTimeString()
    let timeString = time.substring(0, time.length - 6) + time.substring(time.length - 3) + ' ET'

    return (
      <div className="full_article">
        <div>Home > Search</div>
        <div className="article_title">
          { article.headline.main }
        </div>
        <div className="article_credit">
          { article.byline.original + ' '}
          <span className="article_time">{ timeString }</span>
        </div>
        <div className="article_image">
          { this.imageBox() }
        </div>
        <div className="article_info">
          { article.snippet }
        </div>
      </div>
    )
  }
}
