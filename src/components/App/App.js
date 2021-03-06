import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
const allNews = {local, entertainment, health, science, technology}

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: local
    }
  }

  selectNewsType = (type) => {
    this.setState({articles: allNews[type]})
  }

  searchCards = (searchTerm) => {
    const casedSearch = searchTerm.toLowerCase();
    const filteredArticles = this.state.articles.filter(article => {
      return (article.headline.toLowerCase().includes(casedSearch) 
        || article.description.toLowerCase().includes(casedSearch))
      })

    this.setState({articles: filteredArticles})
  }

  render () {
    return (
      <div className="app">
        <SearchForm searchCards={this.searchCards} />
        <Menu selectNewsType={this.selectNewsType} />
        <NewsContainer articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
