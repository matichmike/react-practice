import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList({ articles }) {
  const articleElems = articles.map((article, index) => 
  <li className="article-list_li" key = {article.id}><Article article = {article} defaultOpen = {index === 0}/></li>
    );
  return (
    <ul>
      {articleElems}
    </ul>
  )
}