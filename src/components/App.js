import ArticleList from './ArticleList';
import React from 'react';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
      <h1 className="display-3">ArticlesList</h1>
      </div>
      <ArticleList articles={articles}/>
    </div>
  )
}

export default App;