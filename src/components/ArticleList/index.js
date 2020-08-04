import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
  state = {
    openArticleId: null
  }
  render() {
    const articleElems = this.props.articles.map((article, index) => 
    <li className="article-list_li" key = {article.id}>
      <Article article = {article} 
      isOpen = {this.state.openArticleId === article.id}
      onButtonClick = {this.handleClick.bind(this, article.id)}
      />
      </li>
      );
    return (
      <ul>
        {articleElems}
      </ul>
    )
  }
  handleClick = openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
  })
}