import React, { Component } from 'react'

export default class TopArticle extends Component {

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
      <div className="top_article" onClick={ this.setArticle.bind(this) }>
        <div className="article_top">
          <div className="article_info">
            <div className="article_title">
              { this.props.article.headline.main }
            </div>
            <div className="article_credit">
              { this.props.article.byline.original + ' ' + timeString}
            </div>
          </div>
          <div className="article_image">
            { this.imageBox() }
          </div>
        </div>
        <div className="article_bottom">
          { this.props.article.snippet }
        </div>
      </div>
    )
  }
}
