import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList({ articles }) {
  const articleElems = articles.map(article => 
  <li className="article-list_li" key = {article.id}><Article article = {article}/></li>
    );
  return (
    <ul>
      {articleElems}
    </ul>
  )
}