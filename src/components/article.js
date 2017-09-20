import React, { Component } from 'react'

export default class ArticleList extends Component {

  render() {
    return (
      <div className="article">
        { this.props.article.headline.main }
      </div>
    )
  }
}
